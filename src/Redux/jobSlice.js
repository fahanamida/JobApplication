import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/jobs"; // ✅ JSON Server port

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addJob = createAsyncThunk("jobs/addJob", async (job) => {
  const newJob = {
    ...job,
    id: Date.now().toString() // ✅ ID as string
  };
  const res = await axios.post(API_URL, newJob);
  return res.data;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, data }) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.map((job) =>
          String(job.id) === String(action.payload.id) ? action.payload : job
        );
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => String(job.id) !== String(action.payload));
      });
  },
});

export default jobSlice.reducer;
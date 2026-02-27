import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/jobs";

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
    axios.put(`${API_URL}?id=${id}`, data);;
    return res.data;
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  axios.delete(`${API_URL}?id=${id}`);
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
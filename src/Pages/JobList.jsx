import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, deleteJob } from '../Redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import JobCard from '../Components/JobCard';
import SearchBar from '../Components/SearchBar';
import StatusFilter from '../Components/StatusFilter';

function JobList() {
  const jobs = useSelector(state => state.jobs.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Delete",
    });

    if (result.isConfirmed) {
      await dispatch(deleteJob(id));
      Swal.fire("Deleted!", "Job Deleted Successfully", "success");
    }
  };

  const filteredJobs = jobs?.filter(
    (job) =>
      (job?.name?.toLowerCase() || '').includes(search.toLowerCase()) &&
      (statusFilter === 'All' || job?.status === statusFilter)
  ) || [];

  return (
    <div className="min-h-[80vh] p-5">
      <div className="flex flex-wrap gap-3 justify-between mb-5">
        <SearchBar setSearch={setSearch} />
        <StatusFilter setStatusFilter={setStatusFilter} />
        <button
          onClick={() => navigate('/add-job')}
          className="bg-blue-900 px-4 py-2 text-white rounded"
        >
          Add Job
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} handleDelete={handleDelete} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
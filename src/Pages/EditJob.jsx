import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateJob, fetchJobs } from '../Redux/jobSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditJob() {
  const { id: jobId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobs = useSelector(state => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Fixed: Use loose equality (==) or String conversion to ensure ID matches regardless of type
  const existingJob = jobs.find(job => String(job.id) === String(jobId));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    education: '',
    location: '',
    companyName: '',
    companyLocation: '',
    status: 'Pending',
  });

  useEffect(() => {
    if (existingJob) {
      setFormData(existingJob);
    }
  }, [existingJob]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updateJob({ id: jobId, data: formData }));

    Swal.fire("Updated!", "Job Updated Successfully", "success");
    navigate("/job-list");
  };

  if (!existingJob) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <h2 className="text-xl font-semibold text-red-500">
          Job Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center p-5">
      <form onSubmit={handleSubmit} className="shadow-xl p-8 rounded-xl w-full max-w-3xl">
        <h2 className="text-3xl mb-6 font-bold text-center">Edit Job</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" value={formData.name || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="phone" value={formData.phone || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="email" value={formData.email || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="education" value={formData.education || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="location" value={formData.location || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="companyName" value={formData.companyName || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="companyLocation" value={formData.companyLocation || ''} onChange={handleChange} className="border p-2 rounded" required />
          <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
            <option value="Pending">Pending</option>
            <option value="Submitted">Submitted</option>
            <option value="Interview">Interview</option>
          </select>
        </div>
        <div className="text-center mt-6">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Update Job</button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../Redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddJob() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    education: '',
    location: '',
    companyName: '',
    companyLocation: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      ...formData
    };
    await dispatch(addJob(newJob));
    Swal.fire({
      title: 'Success!',
      text: 'Job Added Successfully',
      icon: 'success'
    });
    navigate('/job-list');
  };

  return (
    <div className='min-h-[80vh] flex justify-center items-center p-5'>
      <form onSubmit={handleSubmit} className='shadow-xl p-8 rounded-xl w-full max-w-3xl'>
        <h2 className='text-3xl mb-6 font-bold text-center'>Add Job</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <input name="name" value={formData.name} placeholder="Name" className="border p-2 rounded" onChange={handleChange} required />
          <input name="phone" value={formData.phone} placeholder="Phone" className="border p-2 rounded" onChange={handleChange} required />
          <input name="email" value={formData.email} placeholder="Email" className="border p-2 rounded" onChange={handleChange} required />
          <input name="education" value={formData.education} placeholder="Education" className="border p-2 rounded" onChange={handleChange} required />
          <input name="location" value={formData.location} placeholder="Location" className="border p-2 rounded" onChange={handleChange} required />
          <input name="companyName" value={formData.companyName} placeholder="Company Name" className="border p-2 rounded" onChange={handleChange} required />
          <input name="companyLocation" value={formData.companyLocation} placeholder="Company Location" className="border p-2 rounded" onChange={handleChange} required />
          <select name="status" value={formData.status} className="border p-2 rounded" onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Submitted">Submitted</option>
            <option value="Interview">Interview</option>
          </select>
        </div>
        <div className='text-center mt-6'>
          <button type="submit" className='bg-green-500 text-white px-6 py-2 rounded'>Save Job</button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
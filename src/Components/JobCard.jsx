import { FaPhoneAlt, FaEdit } from "react-icons/fa";
import { MdEmail, MdDelete } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { RiUserLocationFill } from "react-icons/ri";
import { GiFamilyHouse } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function JobCard({ job, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="shadow-xl p-5 rounded-xl border bg-white">
      <h2 className="text-2xl font-bold mb-4">{job.name}</h2>

      <p className="flex items-center gap-2"><FaPhoneAlt /> <b>Phone:</b> {job.phone}</p>
      <p className="flex items-center gap-2"><MdEmail /> <b>Email:</b> {job.email}</p>
      <p className="flex items-center gap-2"><IoSchool /> <b>Education:</b> {job.education}</p>
      <p className="flex items-center gap-2"><RiUserLocationFill /> <b>Location:</b> {job.location}</p>
      <p className="flex items-center gap-2"><GiFamilyHouse /> <b>Company:</b> {job.companyName}</p>
      <p className="flex items-center gap-2"><FaMapLocationDot /> <b>Company Location:</b> {job.companyLocation}</p>
      <p className="mt-4">
        <b>Status:</b>
        <span
          className={`ml-2 px-2 py-1 rounded text-white
            ${job.status === 'Pending' ? 'bg-red-500' : ''}
            ${job.status === 'Submitted' ? 'bg-green-500' : ''}
            ${job.status === 'Interview' ? 'bg-orange-500' : ''}
          `}>
          {job.status}
        </span>
      </p>
      <div className="flex gap-3 mt-5">
        <button onClick={() => navigate(`/edit-job/${job.id}`)}
          className="flex items-center gap-1 bg-blue-500 px-3 py-1 text-white rounded hover:bg-blue-600 transition">
          <FaEdit /> Edit
        </button>
        <button onClick={() => handleDelete(job.id)}
          className="flex items-center gap-1 bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600 transition">
          <MdDelete /> Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
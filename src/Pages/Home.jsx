import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://png.pngtree.com/background/20211217/original/pngtree-creative-recruitment-and-job-search-background-applying-for-giving-cv-competition-picture-image_1576670.jpg')] bg-cover bg-center bg-fixed">
      <div className="bg-gray-50/55 shadow-2xl p-12 rounded-2xl text-center max-w-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800">
          Job Application Tracker
        </h1>
        <p className="text-gray-600 mb-8">
          Easily track your job applications and manage your opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate('/add-job')}
            className="bg-green-500 hover:bg-green-600 transition text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Add Job
          </button>
          <button
            onClick={() => navigate('/job-list')}
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            View Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
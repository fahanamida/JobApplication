import React from 'react';
import { LiaSchoolSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex justify-center items-center">
        <h1 className="flex items-center gap-2 text-4xl font-bold">
          <LiaSchoolSolid className="text-white text-3xl" />
          <Link to={'/'}> Job Application</Link>
        </h1>
      </div>
    </>
  )
}

export default Header
import React from 'react';

import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-800 text-white p-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">JobPortal</h3>
          <p className="text-gray-400">
            Helping you find the perfect job and connect with top companies. Your career starts here!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/jobs" className="hover:text-white transition">Jobs</a></li>
            <li><a href="/add-job" className="hover:text-white transition">Add Job</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2"><span className="font-bold">Email:</span> support@jobportal.com</p>
          <p className="flex items-center gap-2"><span className="font-bold">Phone:</span> +91 9876543210</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className='flex gap-4 text-xl'>
            <BsInstagram />
            <BsTwitterX />
            <BsFacebook />
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className='bg-gray-900 p-2 text-center text-white text-xs'>
        Copyright &copy; 2026 All Rights Reserved | Created Published By <FaHeart className='inline text-yellow-300'/>
      </div> 
    </>
  )
}

export default Footer
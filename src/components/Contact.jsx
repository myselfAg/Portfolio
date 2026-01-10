import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' className='h-[70vh] w-full flex flex-col justify-center items-center gap-8 text-gray-800 bg-linear-180 from-white via-gray-50 to-gray-100'>
      <h1 className='text-5xl font-semibold'>Let's Contact</h1>
      <p className='text-lg text-gray-500'>Currently looking for internship opportunities or entry-level developer roles.</p>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agneeshpersonal@gmail.com" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center gap-3 cursor-pointer h-18 w-96 text-white font-semibold rounded-md text-xl bg-indigo-600 hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg shadow-gray-300'><CiMail/>agneeshpersonal@gmail.com</a>
      <div className='flex gap-7'>
        <a href="https://github.com/myselfAg" target="_blank"><FaGithub className="text-gray-500 hover:text-indigo-700 hover:-translate-y-0.5 duration-300 ease-in-out hover:shadow-md shadow-gray-300 rounded-full" size={30}/></a>
        <a href="https://www.linkedin.com/in/agneesh-mozumder" target="_blank"><FaLinkedin className="text-gray-500 hover:text-indigo-700 hover:-translate-y-0.5 duration-300 ease-in-out hover:shadow-md shadow-gray-300" size={30} /></a>
      </div>
    </section>
  );
}

export default Contact;

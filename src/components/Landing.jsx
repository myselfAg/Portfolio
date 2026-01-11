import React from 'react';
const Landing = () => {


  return (
    <section id='hero' className='h-screen w-full flex flex-col justify-center items-center gap-8 bg-linear-45 from-white  via-white to-slate-100'>
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <p className='text-lg font-medium text-cyan-400'>Hi there, 👋 I am</p>
        <h1 className='text-7xl font-bold text-gray-800'>Agneesh Mozumder</h1>
        <h2 className='text-2xl font-semibold text-gray-500'>BCA Student & Aspiring <span className='text-indigo-600'>Software Developer</span></h2>
        <h3 className='text-xl text-gray-500 mt-2'>Building clean, efficient, and user-centric applications. Passionate<br /> about learning new technologies and solving real-world problems.</h3>
      </div>
      <div className="flex gap-4">
        <a href='#project' className='flex justify-center items-center cursor-pointer h-12 w-38 text-white font-semibold rounded-lg text-md bg-indigo-600 hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg shadow-gray-300'>View Projects</a>
        <a href='#contact' className='flex justify-center items-center cursor-pointer h-12 w-38 text-indigo-600 text-md font-semibold rounded-lg border-2 border-violet-700 hover:duration-300 ease-in-out hover:bg-slate-100'>Contact Me</a>
      </div>
    </section>
  );
}

export default Landing;

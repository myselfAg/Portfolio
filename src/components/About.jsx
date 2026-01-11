import React from 'react';

const About = () => {
  return (
    <section id='about' className='h-[70vh] w-full flex items-center bg-linear-45 from-white via-gray-50 to-gray-50'>
      <div className="flex flex-col justify-center gap-12 h-2/3 w-1/2 pl-32">
        <h1 className='text-5xl font-semibold text-gray-800'>About Me</h1>
        <p className='text-lg text-gray-500'>I am a motivated Bachelor of Computer Applications (BCA) student with a strong foundation in software development and web technologies. Seeking an entry-level opportunity where I can apply my programming skills, learn from real-world projects, and contribute effectively to organizational growth.</p>
      </div>
      <div className="flex flex-col justify-center items-center h-2/3 w-1/2 p-10">
        <div className="h-80 w-3/4 rounded-xl bg-white border border-gray-200 bg-[url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover shadow-xl"></div>
      </div>
    </section>
  );
}

export default About;

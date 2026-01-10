import React from 'react';

const Navbar = () => {
  return (
    <div className='fixed z-10 h-18 w-full flex justify-between items-center px-28 border-b border-gray-200 bg-white'>
      <h1 className='text-2xl text-indigo-600 font-bold'>Portfolio</h1>
      <div className="flex gap-10 text-md text-gray-500 font-semibold">
        <a href="#hero" className='hover:text-gray-700'>Home</a>
        <a href="#about" className='hover:text-gray-700'>About</a>
        <a href="#skills" className='hover:text-gray-700'>Skills</a>
        <a href="#project" className='hover:text-gray-700'>Projects</a>
        <a href="#contact" className='hover:text-gray-700'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

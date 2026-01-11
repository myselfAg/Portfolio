import React from 'react';
import Project from './Project';
import { projectDertails } from '../JSONS/ProjectDetails'

const Projects = () => {
  return (
    <section id='project' className='h-screen w-full px-32 pt-24 flex flex-col gap-10 bg-linear-45 from-white via-gray-50 to-gray-50'>
      <h1 className='text-5xl font-semibold text-gray-800'>Featured Projects</h1>
      <div className="flex justify-between items-center h-9/12 w-full">
        {projectDertails.map((items, idx) => (
          <Project key={idx} img={items.img} title={items.title} description={items.description} lang={items.lang} link={items.link} />
        ))}

      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import { FaGithub } from "react-icons/fa";
const Project = (props) => {
    
    return (
        <div className="h-full w-[48%] rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 duration-300 ease-in-out hover:shadow-xl">
            <div className="h-5/12 w-full bg-cover bg-center" style={{ backgroundImage: `url(${props.img})` }}></div>
            <div className="h-7/12 w-full p-10 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl font-semibold text-gray-800'>{props.title}</h1>
                    <p className='text-lg text-gray-500'>{props.description}</p>
                </div>
                <div className="flex gap-2">
                    {props.lang.map((items) => (
            
                    <p className='px-3 py-1 rounded-full bg-violet-100 text-center text-indigo-700'>{items}</p>
                    ))}
                </div>
                <a href={props.link} target='_blank' className="rounded-full flex justify-center items-center gap-1 h-10 w-20 hover:-translate-y-0.5 duration-300 ease-in-out hover:shadow-md shadow-gray-300">
                    <FaGithub size={20} /><span className='font-semibold text-gray-800'>Code</span>
                </a>
            </div>
        </div>
    );
}

export default Project;

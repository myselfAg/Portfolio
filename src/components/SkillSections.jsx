import React from 'react';
import Skill from './Skill';

const SkillSections = (props) => {
    return (
        <div className="overflow-auto h-full w-1/2 p-6 rounded-xl shadow-md hover:-translate-y-1 duration-300 ease-in-out hover:shadow-xl">
            <h2 className='pb-4 font-semibold text-gray-800 '>{props.skills.heading}</h2>
            <div className="h-auto flex flex-wrap gap-2">
            {props.skills.skills.map((items, idx) => (
                <Skill key={idx} eachskill={items} />
            ))}
            </div>
        </div>
    );
}

export default SkillSections;

import SkillSections from './SkillSections';
import { skillSet1, skillSet2 } from '../JSONS/Skills';

const Skills = () => {
    return (
        <section id='skills' className='h-screen w-full flex flex-col gap-14 px-32 py-24'>
            <h1 className='text-5xl font-semibold text-gray-800'>Technical Skills</h1>
            <div className="h-screen w-full flex justify-between flex-col gap-6">
                    <div className="h-1/2 w-full flex gap-6">
                        {skillSet1.map((items, idx) => (<SkillSections key={idx} skills={items} />))}
                    </div>
                    <div className="h-1/2 w-full flex gap-6">
                        {skillSet2.map((items, idx) => (<SkillSections key={idx} skills={items} />))}
                    </div>
                

            </div>
        </section>
    );
}

export default Skills;
import React from 'react';
import IMAGES from '../Images/Images';

const Skills = () => {
    const skills = [
        {
            title: "Languages",
            skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "Tools",
            skills: ["Git", "VS Code"]
        },
        {
            title: "Frameworks",
            skills: ["React", "Next", "Tailwind", "Express", "NodeJS"]
        },
        {
            title: "Others",
            skills: ["Axios", "Postman", "React-Router", "Redux-Toolkit"]
        },
    ];

    return (
        <div className="mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10">
            <div className="relative">
                <div className="flex items-center justify-start">
                    <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>Skills</h1>
                </div>
                <span className="absolute w-[45%] top-[50%] h-[2px] bg-purple-500"></span>
            </div>


            <div className="flex items-center justify-between mt-8 gap-4">
                <div className='hidden md:block w-full '>
                    <img src={IMAGES.skills} alt="skills" className="w-[349px] h-[282px]" />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
                    {skills.map((category, index) => (
                        <div key={index} className={` ${index === 0 ? 'row-span-2' : ''}`}>
                            <h1 className="xl:text-2xl text-xl font-semibold border border-white xl:p-2 lg:p-0 p-2">{category.title}</h1>
                            <div className="flex md:flex-wrap md:flex-row flex-col gap-2 border border-t-0 border-white px-2 text-gray-400">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

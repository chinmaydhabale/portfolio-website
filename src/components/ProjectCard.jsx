import React from 'react'

const ProjectCard = ({ item, index }) => {
    return (
        <div key={index}>
            <div className='border border-white'>
                <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
            </div>
            <div className='flex gap-2 border border-white p-2 flex-wrap text-sm text-gray-400'>
                {item.technology.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            <div className='border border-t-0 border-white p-2 flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>{item.title}</h1>
                <p>{item.description}</p>
                <div className='flex gap-2'>
                    <button onClick={() => window.open(item.live, "_blank")} className='px-4 py-1 border border-purple-500 '>Live</button>
                    <button onClick={() => window.open(item.github, "_blank")} className='px-4 py-1 border border-purple-500 '>Github</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
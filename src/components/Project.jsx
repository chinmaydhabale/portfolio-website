import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import IMAGES from '../Images/Images'
import ProjectCard from './ProjectCard'
import { useNavigate } from 'react-router-dom'
const Project = () => {

    const navigate = useNavigate()
    
    const projectdata = [
        {
            "img": "https://github.com/chinmaydhabale/portfolio-web/blob/main/image/Entertainment.png?raw=true",
            "live": "https://entertainment-app-1-kvea.onrender.com/",
            "github": "https://github.com/chinmaydhabale/Entertainment-app",
            "title": "Entertainment-App",
            "technology": ["React", "Node", "Express", "MongoDB", "Tailwind"],
            "description": "Watch movies and tv shows and also add your favorite movies and tv shows to your collection."
        },
        {
            "img": "https://github.com/chinmaydhabale/portfolio-web/blob/main/image/resumebuilder.png?raw=true",
            "live": "https://resume-builder-bay.vercel.app/",
            "github": "https://github.com/chinmaydhabale/Resume-Builder",
            "title": "Resume Builder",
            "technology": ["React", "Tailwind", "Redux-Toolkit", "React-Router"],
            "description": "Build your resume and download it in pdf format."
        },
        {
            "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpH2b9jeidTS-sJDUfkuQ7jLxTd-ciyqz7Ci9UnNFlqNt0q7_z1BeDwoWVQc7ogA4WoE1DdsMU4mw5obwwKBOU9g2Dj6vaafdfNVeLZP4mCowIPKEaqcKYiSCpNSWxh_J0tabS_OUckChCT45-IqaZE5b87xmvmpyzgOxMk3CMjtyZE8ry7QPnk67iHW8/s1902/Screenshot%202024-10-27%20111018.png",
            "live": "https://markerable-home-page.vercel.app/",
            "github": "https://github.com/chinmaydhabale/Markerable-HomePage",
            "title": "Markerable HomePage",
            "technology": ["React", "Tailwind"],
            "description": "Clone of Markerable website HomePage.",
            "type": "Frontend"
        }
    ]

    return (
        <div className='relative'>

            <div className='mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10'>
                <div className='relative'>
                    <div className='flex items-center justify-between'>
                        <h1 className=' text-2xl font-bold bg-[#282d33] z-10 pr-2'><span className='text-purple-500'>#</span>projects</h1>
                        <button className='flex cursor-pointer items-center gap-2 bg-[#282d33] z-10 pl-2 w-[30%] justify-end' onClick={() => navigate("/projects")}>View All <FaLongArrowAltRight /></button>
                    </div>
                    <span className='absolute w-full top-[50%] h-[2px] bg-purple-500'></span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 gap-10'>
                    {projectdata.map((item, index) => (
                        <ProjectCard item={item} index={index} />
                    ))}
                </div>
            </div>
            <span className='hidden lg:block absolute top-0 left-[-40px] '>
                <img src={IMAGES.dots} alt="dots" className='h-[70px] w-[80px]' />
            </span>
            <span className='hidden lg:block absolute w-24 h-36 bottom-0 right-[-30px] border border-gray-400 px-2 py-1'></span>
        </div>
    )
}

export default Project
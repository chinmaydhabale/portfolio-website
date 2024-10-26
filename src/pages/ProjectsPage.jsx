import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IMAGES from '../Images/Images'


const ProjectsPage = () => {


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
        }
    ]


    return (
        <div>
            <Navbar />
            <div className='mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10 md:px-4'>
                <div>
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>projects</h1>
                    <p className='text-gray-500'>What i have built?</p>
                </div>
                <div className='mt-10 relative'>
                    <div className="flex items-center justify-start mt-10">
                        <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>completes-apps</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 gap-10'>
                        {projectdata.map((item, index) => (
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
                        ))}
                    </div>
                </div>

                <span className='hidden lg:block absolute top-[50%] left-[-20px] '>
                    <img src={IMAGES.dots} alt="dots" className='h-[50px] w-[80px]' />
                </span>
                <span className='hidden lg:block absolute w-24 h-36 bottom-[-50%] top-[30%] right-[-30px] border border-gray-400 px-2 py-1'></span>

            </div>

            <Footer />
        </div>
    )
}

export default ProjectsPage
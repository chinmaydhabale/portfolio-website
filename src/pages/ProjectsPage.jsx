import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IMAGES from '../Images/Images'
import ProjectCard from '../components/ProjectCard'


const ProjectsPage = () => {


    const projectdata = [
        {
            "img": "https://github.com/chinmaydhabale/portfolio-web/blob/main/image/Entertainment.png?raw=true",
            "live": "https://entertainment-app-1-kvea.onrender.com/",
            "github": "https://github.com/chinmaydhabale/Entertainment-app",
            "title": "Entertainment-App",
            "technology": ["React", "Node", "Express", "MongoDB", "Tailwind"],
            "description": "Watch movies and tv shows and also add your favorite movies and tv shows to your collection.",
            "type": "Full Stack"
        },
        {
            "img": "https://github.com/chinmaydhabale/portfolio-web/blob/main/image/resumebuilder.png?raw=true",
            "live": "https://resume-builder-bay.vercel.app/",
            "github": "https://github.com/chinmaydhabale/Resume-Builder",
            "title": "Resume Builder",
            "technology": ["React", "Tailwind", "Redux-Toolkit", "React-Router"],
            "description": "Build your resume and download it in pdf format.",
            "type": "Frontend"

        },
        {
            "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv8-OQz6ffZLAh3AjHZnect-EBTlp_aNtaV03fqx-YS0DwxT9PXoCW_HjNdKp4A6oH0AnmuyEsf_vUYGxGRRotLsUoMet1ntaBXLsWs_F0eCqDqzXeCtYf1s2nMwpQNcFQemg66e5morve01YI0TZ6ZVGQH9CqaFF61DtqK69a2Bk8knQs17Ubwq606ug/s1917/Screenshot%202024-10-27%20110204.png",
            "live": "https://cryptocurrencydashboard-nine.vercel.app/",
            "github": "https://github.com/chinmaydhabale/cryptocurrency-dashboard",
            "title": "Cryptocurrency Dashboard",
            "technology": ["React", "Tailwind", "Redux-Toolkit", "Chart.js"],
            "description": "A dashboard to track cryptocurrency prices and trends.",
            "type": "Frontend"
        },
        {
            "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpH2b9jeidTS-sJDUfkuQ7jLxTd-ciyqz7Ci9UnNFlqNt0q7_z1BeDwoWVQc7ogA4WoE1DdsMU4mw5obwwKBOU9g2Dj6vaafdfNVeLZP4mCowIPKEaqcKYiSCpNSWxh_J0tabS_OUckChCT45-IqaZE5b87xmvmpyzgOxMk3CMjtyZE8ry7QPnk67iHW8/s1902/Screenshot%202024-10-27%20111018.png",
            "live": "https://markerable-home-page.vercel.app/",
            "github": "https://github.com/chinmaydhabale/Markerable-HomePage",
            "title": "Markerable HomePage",
            "technology": ["React", "Tailwind"],
            "description": "Clone of Markerable website HomePage.",
            "type": "Frontend"
        },
        {
            "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho5zn4cpEI8tfKWsXc1RuPaXw9gpuVgm1DazdEfwnqyGW5cFt3QXB66yGtxH4BkC4hRQfGXWPbUF7Tkrlw2rnqzwVKEBpUXrO_RR2BE1F_uF1_Z4bLh81J-T5_VFfd-MjXtmOWnrGBRq6JHwbU4dmJqnod5AWwPN1o3t-9KAdMSTwcrYnRrpTH7UAq_M8/s1898/Screenshot%202024-10-27%20111722.png",
            "live": "https://online-restaurant-ordering-system.vercel.app/",
            "github": "https://github.com/chinmaydhabale/Online-Restaurant-Ordering-System",
            "title": "Online Restaurant Ordering System",
            "technology": ["React", "Tailwind"],
            "description": "An online restaurant ordering system.",
            "type": "Frontend"
        },
        {
            "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGqta4aWGc6A-0wGUwh9bzQt43xXliwd2tti1-KB8kRnnJ3Pc7QITKc7wWD-f2ABt2S7n-mBaXazGbkiSzV6vLB-VOtDW6AbOIEKWwvXGSGt5gW1b0joKKHrdHrln-zM6iQEn8VR-QCFLhz55ENI-WvnGT0IwtWkMrvbqgyd8XA3JULZD3Djyd4O9hd6I/s1920/Screenshot%202024-10-27%20114111.png",
            "live": "https://analytic-dashboard-fnc7.onrender.com",
            "github": "https://github.com/chinmaydhabale/Analytic-Dashboard",
            "title": "Analytic Dashboard",
            "technology": ["React", "Node", "Express", "MongoDB", "Tailwind", "Chart.js"],
            "description": "This project is a Sales and Customer Analytics Dashboard",
            "type": "Full Stack"
        },

    ]


    return (
        <div>
            <Navbar />
            <div className='lg:mt-16 mt-8 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10 md:px-4'>
                <div>
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>projects</h1>
                    <p className='text-gray-500'>What i have built?</p>
                </div>
                <div className='mt-10 relative'>
                    <div className="flex items-center justify-start mt-10">
                        <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>Full-Stack</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 gap-10'>
                        {projectdata.filter((item) => item.type === "Full Stack").map((item, index) => (
                            <ProjectCard item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div className='mt-10 relative'>
                    <div className="flex items-center justify-start mt-16">
                        <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>Frontend</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 gap-10'>
                        {projectdata.filter((item) => item.type === "Frontend").map((item, index) => (
                            <ProjectCard item={item} index={index} />
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
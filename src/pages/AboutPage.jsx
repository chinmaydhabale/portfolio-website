import React from 'react'
import IMAGES from '../Images/Images'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaLongArrowAltRight } from 'react-icons/fa'

const AboutPage = () => {

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

    const funfacts = [
        "I like winter more than summer",
        "I often bike with my friends",
        "I like pizza and pasta",
        "I was in Egypt, Poland and Turkey",
        "My favorite movie is The Green Mile",
        "I am still in school",
        "I don’t have any siblings"
    ]



    return (
        <div >
            <Navbar />

            {/* about me section */}
            <div className='relative'>

                <div className='flex flex-col md:mt-16 mt-6 w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:mb-10 mb-6'>
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>about-me</h1>
                    <p className='text-gray-500'>Who am i?</p>
                </div>
                <div className='relative md:mt-16 mt-6 w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:mb-10'>
                    <div className=' flex flex-col md:flex-row md:justify-between gap-4'>
                        <div className='mt-10 w-full md:w-[50%]'>
                            <div className='flex flex-col gap-8'>
                                <div className='text-gray-500 font-medium'>

                                    Hello, i’m Chinmay!
                                    <br />
                                    <br />

                                    I’m a self-taught front-end developer based in Maharashtra, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                                    <br />
                                    <br />
                                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                                </div>
                                <button className='border border-purple-500 px-5 py-1 w-fit flex items-center gap-1'>Read more <FaLongArrowAltRight /></button>
                            </div>
                        </div>

                        <div className='hidden md:block absolute top-0 right-0'>
                            <img src={IMAGES.about} alt="about" className='w-[300px] h-[450px]' />
                        </div>
                    </div>
                </div>

                <span className='hidden lg:block absolute top-[50%] left-[-20px] '>
                    <img src={IMAGES.dots} alt="dots" className='h-[50px] w-[80px]' />
                </span>
                <span className='hidden lg:block absolute bottom-[-40%] right-[-20px] '>
                    <img src={IMAGES.dots} alt="dots" className=' ' />
                </span>
                <span className='hidden lg:block absolute w-24 h-36 bottom-[-50%] top-[30%] right-[-30px] border border-white px-2 py-1'></span>
            </div>


            {/* skills section */}
            <div className='relative md:mt-40 mt-20 w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:mb-10 mb-1'>
                <div className="flex items-center justify-start">
                    <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>Skills</h1>
                </div>
                <div className="grid lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-10">
                    {skills.map((category, index) => (
                        <div key={index}>
                            <h1 className="xl:text-2xl text-xl font-semibold border border-white xl:p-2 lg:p-0 p-2">{category.title}</h1>
                            <div className="flex md:flex-wrap md:flex-row flex-col gap-2 border border-t-0 border-white p-2 text-gray-400">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* fun facts section */}
            <div className='relative'>
                <div className=' md:mt-40 mt-20 w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:mb-10 mb-1'>
                <div className="flex items-center justify-start">
                    <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>my-fun-facts</h1>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between gap-4 mt-10'>
                    <div className='flex flex-wrap gap-4'>
                        {funfacts.map((fact, index) => (
                            <div key={index} className='border border-gray-500 p-2'>
                                <p className='text-gray-500'>{fact}</p>
                            </div>
                        ))}
                    </div>
                    <div className='hidden md:block w-full '>
                        <img src={IMAGES.funfacts} alt="funfacts" />
                        </div>
                    </div>
                </div>

                <span className='hidden lg:block absolute bottom-[0%] right-[-20px] '>
                    <img src={IMAGES.dots} alt="dots"  />
                </span>
                <span className='hidden lg:block absolute w-24 h-36 bottom-[-50%] top-[30%] left-[-30px] border border-white px-2 py-1'></span>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage
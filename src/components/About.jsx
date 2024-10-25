import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import IMAGES from '../Images/Images'

const About = () => {
    return (
        <div className='relative'>
            <div className="relative mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10">
                <div className="relative">
                <div className="flex items-center justify-start">
                    <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>About-me</h1>
                </div>
                <span className="absolute w-[60%] top-[50%] h-[2px] bg-purple-500"></span>
            </div>


            <div className=' flex flex-col md:flex-row md:justify-between gap-4'>
                <div className='mt-10 w-full md:w-[50%]'>
                    <div className='flex flex-col gap-8'>
                        <div className='text-gray-500 font-medium'>

                            Hello, i’m Elias!
                            <br />
                            <br />

                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                        <br />
                        <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </div>
                        <button className='border border-purple-500 px-5 py-1 w-fit flex items-center gap-1'>Read more <FaLongArrowAltRight /></button>
                    </div>
                </div>

                <div className='hidden md:block absolute top-0 right-0'>
                    <img src={IMAGES.about} alt="about" className='w-[343px] h-[508px]' />  
                </div>
            </div>
        </div>
            <img src={IMAGES.dots} alt="dots" className='hidden lg:block absolute w-[103px] h-[103px] bottom-0 right-0' />
            <span className='hidden lg:block absolute w-24 h-28 bottom-[-50%] top-[50%] left-[-20px] border border-white px-2 py-1'></span>
        </div>
    )
}

export default About
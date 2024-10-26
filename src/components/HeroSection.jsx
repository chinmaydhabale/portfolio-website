import React from 'react'
import IMAGES from '../Images/Images'
const HeroSection = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col md:flex-row md:w-[80%] lg:w-[70%] mx-auto items-center gap-4 lg:gap-8 pt-4 md:pt-10 px-4'>
                <div className='md:w-[50%] flex flex-col gap-3 lg:gap-8'>
                    <h1 className='md:text-4xl text-3xl font-bold'>
                        Chinmay is a <span className='text-purple-500'>Full Stack Developer</span>
                    </h1>
                    <p className='text-gray-500 text-sm'>He Craft Responsive and User Friendly Websites Where Technology Meets Creativity</p>
                    <button className='hidden md:block px-5 py-1 border border-purple-500 w-fit'>Contact me !!</button>
                </div>
                <div className='md:w-[50%]'>
                    <img src={IMAGES.HeroImage} alt="HeroImage" className='md:w-[469px] md:h-[386px] w-[420px] h-[350px]' />
                    <div className='flex border border-gray-400 px-4 py-1 items-center gap-2'>
                        <span className='bg-purple-500 w-3 h-3'></span> <span className='text-sm text-gray-500'>Currently I am</span> <span className='text-white'>Fresher</span>
                    </div>
                </div>
            </div>
            <div className='relative border-[1.5px] border-gray-400 w-[90%] md:w-[55%] lg:w-[40%] mx-auto md:p-6 p-4 mt-10 text-center'>
                <span className='absolute top-[-13px] left-[25px] bg-[#282d33] p-[5px]'>"</span>
                <span className='text-xl '>With great power comes great electricity bill</span>
                <span className='absolute bottom-[-21.5px] right-[25px] bg-[#282d33] p-[5px]'>"</span>
                <span className='absolute bottom-[-33.5px] right-[-0.1%] border-[1.5px] border-t-0 border-gray-400 w-fit px-2 py-1'>- Dr. Who</span>
            </div>
            <span className='hidden lg:block absolute w-24 h-16 bottom-[-10px] right-[-20px] border border-gray-400 px-2 py-1'></span>
        </div>
    )
}

export default HeroSection
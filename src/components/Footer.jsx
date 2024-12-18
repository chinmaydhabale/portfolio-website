import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import IMAGES from '../Images/Images'



const Footer = () => {
    return (
        <div>
            <hr className='border-t-2 border-gray-400 w-full md:mt-40 mt-20' />
            <div className='flex md:justify-between flex-col md:flex-row items-center gap-5 p-4 md:w-[80%] mt-6 lg:w-[70%] mx-auto'>

                <div className='flex flex-col text-center md:text-start gap-2'>
                    <div className='flex items-center justify-center md:justify-start flex-wrap gap-2'>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.logo} alt="logo" className='w-[16px] h-[16px]' />
                            <h1 className='text-lg font-bold flex gap-5 items-center'>
                                CodeWithChinmay
                            </h1>
                        </div>

                        <span className='text-gray-500 text-sm'>chinmaydhabale007@gmail.com</span>
                    </div>
                    <span>Full Stack Web Developer</span>
                </div>

                <div className='flex flex-col text-center md:text-start gap-2'>
                    <h1 className='text-lg font-bold'>Media</h1>
                    <div className='flex items-center justify-center md:justify-start flex-wrap gap-4'>
                        <button className='cursor-pointer z-10' onClick={() => window.open('https://www.linkedin.com/in/chinmay-dhabale-5b9296213/', "_blank")}>
                            <FaLinkedin size={20} />
                        </button>
                        <button className='cursor-pointer z-10' onClick={() => window.open('https://github.com/chinmaydhabale', "_blank")}>
                            <FaGithub size={20} />
                        </button>
                        <button className='cursor-pointer z-10' onClick={() => window.open('https://www.instagram.com/chinmay_dhabale_/', "_blank")}>
                            <FaInstagram size={20} />
                        </button>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center p-4 text-gray-500'>
                © Copyright 2024. Made by Chinnmay
            </div>

        </div>
    )
}

export default Footer
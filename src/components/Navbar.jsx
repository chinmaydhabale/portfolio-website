import React from 'react'
import IMAGES from '../Images/Images'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navigate = useNavigate()
    const handleLanguageChange = (language) => {
        setIsOpen(false)
        console.log(language)
    }




    return (
        <div className='relative'>
            <div className='hidden md:flex justify-between items-center p-4 md:w-[80%] lg:w-[70%] mx-auto'>
                <div className='flex items-center gap-2'>
                    <img src={IMAGES.logo} alt="logo" className='w-[16px] h-[16px]' />
                    <h1 className='text-lg font-bold'>
                        CodeWithChinmay
                    </h1>
                </div>
                <div className='flex items-center gap-4'>
                    <ul className='flex items-center gap-6'>
                        <li className='cursor-pointer' onClick={() => navigate('/')}><span className='text-purple-500' >#</span>Home</li>
                        <li className='cursor-pointer' onClick={() => navigate('/projects')}><span className='text-purple-500' >#</span>Works</li>
                        <li className='cursor-pointer' onClick={() => navigate('/about')}><span className='text-purple-500' >#</span>About</li>
                        <li className='cursor-pointer' onClick={() => navigate('/contact')}><span className='text-purple-500' >#</span>Contact</li>
                        <li className="relative">
                            <button
                                className="flex items-center gap-1"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                ENG
                                <svg
                                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        onClick={() => handleLanguageChange('hindi')}
                                    >
                                        Hindi
                                    </button>
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        onClick={() => handleLanguageChange('marathi')}
                                    >
                                        Marathi
                                    </button>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            {/* for mobile view */}
            <div className='md:hidden'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex items-center gap-2'>
                        <img src={IMAGES.logo} alt="logo" className='w-[16px] h-[16px]' />
                        <h1 className='text-lg font-bold'>
                            CodeWithChinmay
                        </h1>
                    </div>
                    <div onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        {isOpenMenu ? <RxCross2 className='w-[24px] h-[24px]' /> : <img src={IMAGES.menu} alt="menu" className='w-[24px] h-[24px]' />}
                    </div>
                </div>
            </div>

            {/* for mobile view menu slider */}
            {isOpenMenu && (
                <div className=' w-full h-full flex flex-col gap-4 pb-4'>
                    <div className=' h-full pl-2'>
                        <ul className='grid grid-cols-1 p-2 gap-6'>
                            <li><span className='text-purple-500'>#</span>Home</li>
                            <li><span className='text-purple-500'>#</span>Works</li>
                            <li><span className='text-purple-500'>#</span>About</li>
                            <li><span className='text-purple-500'>#</span>Contact</li>
                            <li className="relative">
                                <button
                                    className="flex items-center gap-1"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    ENG
                                    <svg
                                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={() => handleLanguageChange('hindi')}
                                        >
                                            Hindi
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={() => handleLanguageChange('marathi')}
                                        >
                                            Marathi
                                        </button>
                                    </div>
                                )}
                            </li>
                        </ul>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaGithub size={24} />
                        <FaLinkedin size={24} />
                        <FaInstagram size={24} />
                    </div>
                </div>
            )}

            <p className='hidden md:block w-[2px] h-[200px] bg-white absolute top-0 left-[50px]'></p>
            <div className='hidden md:block absolute left-[40px] top-[205px]'>
                <div className='flex flex-col gap-4'>
                    <FaGithub size={24} />
                    <FaLinkedin size={24} />
                    <FaInstagram size={24} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
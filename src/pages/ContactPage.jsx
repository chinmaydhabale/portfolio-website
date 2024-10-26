import React from 'react'
import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10'>
                <div >
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>projects</h1>
                    <p className='text-gray-500'>Who am i?</p>
                </div>
                <div className='relative flex flex-col gap-4 md:flex-row md:justify-between mt-10' >
                    <div className=' text-gray-400 w-full md:w-[50%] '>
                        I’m interested in freelance opportunities. However, <br /> if you have other request or question, don’t <br /> hesitate to contact me.
                    </div>
                    <div className='border border-gray-400 text-center w-full md:w-fit md:absolute md:right-0 mx-auto flex flex-col gap-2 p-4'>
                        <h1 className='text-xl font-bold'>Contact me Here</h1>
                        <div className='flex gap-2 items-center justify-center'>
                            <IoMdCall />
                            <span>+91 9356988746</span>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <MdEmail />
                            <span>chinmaydhabale007@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20 '>
                    <div className="flex items-center justify-start">
                        <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>all-media</h1>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-4 text-gray-400'>
                        <div className='flex gap-2 items-center'>
                            <FaTwitter size={24} /> @chinmay_dhabale
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaInstagram size={24} /> @chinmay_dhabale_
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage

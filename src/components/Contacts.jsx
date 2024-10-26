import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const Contacts = () => {
    return (
        <div className='mt-16 md:mt-36'>
            <div className=" w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10" >
                <div className="relative">
                    <div className="flex items-center justify-start">
                        <h1 className="text-2xl font-bold bg-[#282d33] z-10 pr-2"><span className='text-purple-500'>#</span>Contacts</h1>
                    </div>
                    <span className="absolute lg:w-[30%] w-[45%] top-[50%] h-[2px] bg-purple-500"></span>
                </div>

                <div className='relative flex flex-col gap-4 md:flex-row md:justify-between mt-10' >
                    <div className=' text-gray-400 w-full md:w-[50%] '>
                        I’m interested in freelance opportunities. However, <br /> if you have other request or question, don’t <br /> hesitate to contact me.
                    </div>
                    <div className='border border-white text-center w-full md:w-fit md:absolute md:right-0 mx-auto flex flex-col gap-2 p-4'>
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
            </div>

        </div>
    )
}

export default Contacts
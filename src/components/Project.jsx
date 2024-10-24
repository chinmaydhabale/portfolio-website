import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Project = () => {
    return (
        <div className='mt-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
            <div className='relative'>
                <div className='flex items-center justify-between'>
                    <h1 className=' text-2xl font-bold bg-[#282d33] z-10 pr-2'>#projects</h1>
                    <button className='flex items-center gap-2 bg-[#282d33] z-10 pl-2 w-[30%] justify-end'>View All <FaLongArrowAltRight /></button>
                </div>
                <span className='absolute w-full top-[50%] h-[2px] bg-purple-500'></span>
            </div>
        </div>
    )
}

export default Project
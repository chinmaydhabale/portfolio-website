import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:mt-16 mt-8 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10 md:px-4'>
                <div>
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>blogs</h1>
                    <p className='text-gray-500'>What i have written?</p>
                </div>
                <div className='mt-10'>
                    No Blogs Found
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import IMAGES from '../Images/Images';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_phlrb7o', 'template_himn7sb', form.current, 'CLSibZgE7FrOVtqi_')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
    };

    return (
        <div>
            <Navbar />
            <div className='md:mt-16 mt-5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10 md:px-4'>
                <div >
                    <h1 className='text-2xl font-bold'><span className='text-purple-500'>/</span>Contacts</h1>
                    <p className='text-gray-500'>Who am I?</p>
                </div>
                <div className='relative flex flex-col gap-4 md:flex-row md:justify-between mt-10' >
                    <div className='text-gray-400 w-full md:w-[50%]'>
                        I’m interested in freelance opportunities. However, <br /> if you have other requests or questions, don’t <br /> hesitate to contact me.
                    </div>
                    <div className='border border-gray-400 text-gray-400 text-center w-full md:w-fit md:absolute md:right-0 mx-auto flex flex-col gap-2 p-4'>
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
                <div className='mt-10 md:mt-20'>
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

                <span className='hidden lg:block absolute top-[50%] left-[-20px] '>
                    <img src={IMAGES.dots} alt="dots" className='h-[50px] w-[80px]' />
                </span>
                <span className='hidden lg:block absolute w-24 h-36 bottom-[-50%] top-[30%] right-[-30px] border border-gray-400 px-2 py-1'></span>

                <div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold bg-[#282d33] z-10 pr-2'><span className='text-purple-500'>#</span>Contact-form</h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='mt-6 bg-[#282d33] rounded-md grid grid-cols-2 gap-4'>
                        <input type="text" name="user_name" placeholder='Name' className='w-full p-2 rounded-md bg-transparent border border-gray-400' />
                        <input type="email" name="user_email" placeholder='Email' className='w-full p-2 rounded-md bg-transparent border border-gray-400' />
                        <input type="text" name="subject" placeholder='Subject' className='w-full p-2 rounded-md bg-transparent border border-gray-400 col-span-2' />
                        <textarea name="message" placeholder='Message' className='w-full p-2 rounded-md bg-transparent border border-gray-400 col-span-2' />
                        <button type="submit" className='bg-purple-500 text-white p-2 rounded-md col-span-2'>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;

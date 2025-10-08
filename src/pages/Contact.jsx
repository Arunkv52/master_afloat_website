import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useForm } from 'react-hook-form'


const Contact = () => {
  // use form integrations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function userForm(input) {
    event.preventDefault();

    console.log(input);

  }


  return (
    <>
      <Navbar />
      <div className='py-40 px-5'>
        <div className='md:w-1/2 w-full'>
          <h2 className='text-4xl'>Contacts</h2>
          <p className='text-2xl pt-2 uppercase'>
            If there is anything you would like to talk about, please feel free
            to contact us. Even if you just want to say hello, we look forward
            to hearing from you!
          </p>
        </div>
      </div>

      <div className='bg-white text-black md:py-20 py-10 md:px-30 px-5 md:flex justify-between items-start gap-5'>
        <div className='md:w-1/2 w-full'>
          <p>Conect with social links</p>
          <ul className='md:flex flex-col flex justify-start items-start gap-3 text-2xl pt-5'>
            <a href="#"><li>Facebook </li></a>
            <a href="#"><li>Instagram </li></a>
            <a href="#"><li>Youtube </li></a>
            <a href="#"><li>Twitter(X) </li></a>
          </ul>
        </div>
        <div className='md:w-1/2 w-full'>
          <div className='w-full max-w-4xl'>
            {/* Heading */}
            <h2 className='text-4xl font-bold mb-8'>
              Let&apos;s discuss your <br /> project
            </h2>

            {/* Form */}
            <form className='space-y-6' onSubmit={handleSubmit(userForm)}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Full Name */}
                <input
                  type='text'
                  name='username'
                  placeholder='Full name *'
                  className='w-full p-4 bg-gray-100 rounded-lg outline-none'
                  {...register('username', {
                    minLength: { value: 5, message: 'Need minimum 5 letters' },
                    maxLength: { value: 20, message: 'Only accept 20 letters' },
                    required: { value: true, message: 'Please fill the form' }
                  })}
                />
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                {/* Email */}
                <input
                  type='email'
                  name='email'
                  placeholder='Email *'
                  className='w-full p-4 bg-gray-100 rounded-lg outline-none'
                  {...register('email', {
                    minLength: { value: 5, message: 'Need minimum 5 letters' },
                    maxLength: { value: 20, message: 'Only accept 20 letters' },
                    required: { value: true, message: 'Please fill the form' }
                  })}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Phone */}
                <div className='flex'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone number *'
                    className='w-full p-4 bg-gray-100 rounded-r-lg outline-none'
                    {...register('phone', {
                      minLength: { value: 5, message: 'Need minimum 5 letters' },
                      maxLength: { value: 20, message: 'Only accept 20 letters' },
                      required: { value: true, message: 'Please fill the form' }
                    })}
                  />
                  {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>

                {/* Company */}
                <input
                  type='text'
                  placeholder='Company'
                  name='useritem'
                  className='w-full p-4 bg-gray-100 rounded-lg outline-none'
                  {...register('useritem', {
                    minLength: { value: 5, message: 'Need minimum 5 letters' },
                    maxLength: { value: 20, message: 'Only accept 20 letters' },
                    required: { value: true, message: 'Please fill the form' }
                  })}
                />
                {errors.useritem && <p className='text-red-500'>{errors.useritem.message}</p>}


              </div>

              {/* Message */}
              <textarea
                placeholder='Message'
                rows='4'
                name='textarea'
                className='w-full p-4 bg-gray-100 rounded-lg outline-none'
                {...register('textarea', {
                  minLength: { value: 5, message: 'Need minimum 5 letters' },
                  maxLength: { value: 20, message: 'Only accept 20 letters' },
                  required: { value: true, message: 'Please fill the form' }
                })}
              ></textarea>
              {errors.textarea && <p className='text-red-500'>{errors.textarea.message}</p>}

              {/* Submit Button */}
              <button
                type='submit'
                className='cursor-pointer px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full hover:opacity-90 transition'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className='bg-white text-black md:py-20 py-10 md:px-30 px-5 md:flex justify-between items-start gap-5'>
        <div className='md:w-1/2 w-full'>
          <p>Details for contact</p>
        </div>
        <div className='md:w-1/2 w-full max-w-4xl'>
          <div>
            <div className='pb-10'>
              <h3 className='text-2xl text-[#006994]'>Address</h3>
              <p className='text-black font-semibold'>
                No. 7 Soon Lee Street, #02-16 I Space, Singapore 627608.
              </p>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.429087096093!2d103.74929807395968!3d1.3105118986770532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x100404540f3bcaad%3A0xd41e4733d7f2f13b!2sMaster%20Marine%20(Pte)%20Ltd!5e1!3m2!1sen!2sin!4v1759133138365!5m2!1sen!2sin'
                width='100%'
                height='200'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg shadow-md'
              ></iframe>
            </div>
            <div className='pb-1'>
              <h3 className='text-2xl text-[#006994]'>Mail</h3>
              <p className='text-black font-semibold'>sankar@mastermarine.sg</p>
            </div>
            <div className='pb-1'>
              <h3 className='text-2xl text-[#006994]'>Phone</h3>
              <p className='text-black font-semibold'>+65 8725-0419</p>
            </div>
            <div className='pb-1'>
              <h3 className='text-2xl text-[#006994]'>Fax</h3>
              <p className='text-black font-semibold'>+65 6397-5963</p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  )
}

export default Contact

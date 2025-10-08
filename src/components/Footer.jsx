import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <>
            <footer className='md:py-15 py-10 '>
                <div className='md:px-30 px-5 md:py-20 py-0 md:flex justify-between'>
                    <div>
                        <h2 className='md:text-5xl text-4xl pb-5'>
                            <span className='md:text-white/60 text-white'>
                                Ready to create something
                            </span>{' '}
                            <br /> awesome together?
                        </h2>
                        <Link to={'/contact'}>
                            <button className='bg-white text-black py-2 px-5 rounded-[50px] text-[20px] cursor-pointer'>
                                🚢 Let's Connect
                            </button>
                        </Link>

                    </div>
                    <div className='md:py-0 pt-15'>
                        <p className='md:text-[20px] text-[20px] text-white/60 md:pb-3 pb-5'>
                            Pages
                        </p>

                        <div className='md:flex flex-col flex justify-start items-start gap-3 text-2xl -z-50'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/safetypolicy'}>Safety Policy</Link>
                            <Link to={'/services'}>Services</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                    <div className='md:py-0 pt-10'>
                        <p className='md:text-[20px] text-[20px] text-white/60 md:pb-3 pb-5'>
                            Socials
                        </p>
                        <ul className='md:flex flex-col flex justify-start items-start gap-3 text-2xl'>
                            <a href="#"><li>Facebook </li></a>
                            <a href="#"><li>Instagram </li></a>
                            <a href="#"><li>Youtube </li></a>
                            <a href="#"><li>Twitter(X) </li></a>
                        </ul>
                    </div>
                </div>
                <div className='md:px-30 px-5 md:pt-0 pt-20'>
                    <p className='text-sm text-white/50'>
                        © {date} Master Afloat. Designed by Prism Adverto Pvt Ltd
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer

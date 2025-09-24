import React from 'react'
import { Link } from 'react-router'


const Footer = () => {


    const date = new Date().getFullYear();


    return (
        <>
            <footer className='md:py-5 py-10'>
                <div className='md:px-30 px-5 md:py-20 py-0 md:flex justify-between'>
                    <div>
                        <h2 className='md:text-5xl text-4xl pb-5'><span className='text-white/40'>Ready to create something</span> <br /> awesome together?</h2>
                        <button className='bg-white text-black py-2 px-5 rounded-[50px] text-[20px]'>🚢 Let's Connect</button>
                    </div>
                    <div className='md:py-0 pt-15'>
                        <p className='md:text-[20px] text-[20px] text-white/60 md:pb-3 pb-5'>Pages</p>
                        <ul className='md:flex flex-col flex justify-start items-start gap-3 text-2xl'>
                            <Link to={'/'} className='relative overflow-hidden cursor-pointer group inline-block'>

                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Home
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Home
                                </span>
                            </Link>

                            <Link to={'/about'} className='relative overflow-hidden cursor-pointer group inline-block'>
                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    About
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    About
                                </span>
                            </Link>
                            <Link to={'/safetypolicy'} className='relative overflow-hidden cursor-pointer group inline-block'>
                                  {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Safety and Policy
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Safety and Policy
                                </span>
                            </Link>
                            <Link to={'/services'} className='relative overflow-hidden cursor-pointer group inline-block'>
                                  {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Services
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Services
                                </span>
                            </Link>
                            <Link to={'/contact'} className='relative overflow-hidden cursor-pointer group inline-block'>
                                  {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Contact
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Contact
                                </span>
                            </Link>
                        </ul>
                    </div>
                    <div className='md:py-0 pt-10'>
                        <p className='md:text-[20px] text-[20px] text-white/60 md:pb-3 pb-5'>Socials</p>
                        <ul className='md:flex flex-col flex justify-start items-start gap-3 text-2xl'>
                            <li className="relative overflow-hidden cursor-pointer group inline-block">
                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Facebook
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Facebook
                                </span>
                            </li>

                            <li className="relative overflow-hidden cursor-pointer group inline-block">
                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Instagram
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Instagram
                                </span>
                            </li>
                            <li className="relative overflow-hidden cursor-pointer group inline-block">
                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Youtube
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Youtube
                                </span>
                            </li>
                            <li className="relative overflow-hidden cursor-pointer group inline-block">
                                {/* Old text (default) */}
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Twitter (X)
                                </span>
                                {/* New text (hidden initially, comes up on hover) */}
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:top-0">
                                    Twitter (X)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='md:px-30 px-5 md:pt-0 pt-20'>
                    <p className='text-sm text-white/50'>© {date} Master Afloat. Designed by Prism Adverto Pvt Ltd</p>
                </div>
            </footer>

        </>
    )
}

export default Footer

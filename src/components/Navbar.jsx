import React, { useState } from 'react'

import { MdCloseFullscreen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router';



const Navbar = () => {

    const [menu, setMenu] = useState(false); //false is set 

    return (
        <>
            <div className='md:flex justify-between items-center flex text-white px-5 py-2 fixed w-full top-0'>
                <div className='logo cursor-pointer'>
                    <h1 className='text-3xl'>Display</h1>
                </div>
                <div className='menu text-white md:block hidden'>
                    <ul className='md:flex justify-start items-center gap-5'>
                       
                        <Link to={'/'} className='relative group cursor-pointer'>
                            
                            Home
                            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
                        </Link>

                        <Link to={'/about'} className='relative group cursor-pointer'>
                            About
                            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link to={'/safetypolicy'} className='relative group cursor-pointer'>
                            Safety Policy
                            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link to={'/services'} className='relative group cursor-pointer'>
                            Services
                            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                    </ul>
                </div>

                <div className='menu-contact hidden md:block'>
                    <ul>
                        <Link to={'/contact'} className='bg-black/60 border-2 border-white/25 px-10 py-2 rounded-[50px] cursor-pointer'>
                            Contact
                        </Link>
                    </ul>
                </div>
                {/* Mobile menu start */}
                <div className='mble-menu md:hidden'>
                    <div>
                        <button onClick={() => setMenu(!menu)} className='p-2 flex justify-start items-center gap-1 text-2xl'>
                            {!menu ? (<>Menu <MdCloseFullscreen /></>
                            ) : (
                                <>Close <IoMdClose /></>)}
                        </button>

                    </div>
                    {menu && <div className='absolute top-0 left-0 right-0 bg-black h-dvh py-3 -z-10'>
                        
                        <div className='px-5 pt-20'>
                            <ul className='md:flex md:justify-start md:items-center items-start flex flex-col  gap-5'>
                                <Link to={'/'} className='relative group cursor-pointer text-2xl py-3'>
                                    Home
                                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#006994] transition-all duration-300 group-hover:w-full'></span>
                                </Link>

                                <Link to={'/about'} className='relative group cursor-pointer text-2xl py-3'>
                                    About
                                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#006994] transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                                <Link to={'/safetypolicy'} className='relative group cursor-pointer text-2xl py-3'>
                                    Safety Policy
                                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#006994] transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                                <Link to={'/services'} className='relative group cursor-pointer text-2xl py-3'>
                                    Services
                                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#006994] transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </ul>

                            <ul className='py-10'>
                                <Link to={'/contact'} className='bg-white border-2 text-black px-15 py-2 rounded-[50px] cursor-pointer max-w-fit text-[18px]'>Contact</Link>
                            </ul>

                            <ul className='absolute bottom-20  flex justify-between items-center gap-5 text-[18px] flex-wrap'>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>

                    </div>}
                </div>
            </div>
           
        </>
    )
}

export default Navbar

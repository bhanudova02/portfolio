"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [scrollStyle, setScrollStyle] = useState('0px 1px 6px transparent')

    const handelNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
                setScrollStyle('0px 1px 6px black')
            } else {
                setColor('transparent')
                setScrollStyle('')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])


    return (<>
        <div style={{ backgroundColor: `${color}`, boxShadow: `${scrollStyle}` }} className="fixed top-0 w-full  z-10 ease-in duration-300">
            <div className="container-fluid mx-auto">
                <div className="flex justify-between items-center pt-5 pb-4  px-2 md:px-0">
                    <h1><Link href="/" style={{ color: `${textColor}` }} className="font-bold text-3xl md:text-4xl">
                        Web Developer
                    </Link></h1>
                    <ul style={{ color: `${textColor}` }} className="hidden md:flex gap-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="/#experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="/#project">Project</Link>
                        </li>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Mobile Button */}
                    <div onClick={handelNav} className="block md:hidden z-10">
                        {nav ? <AiOutlineClose size={20} style={{ color: `white` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                    </div>
                    {/* Mobile Menu */}
                    <div className={nav ? 'md:hidden absolute text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'md:hidden text-white absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                        <ul>
                            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500">
                                <Link href="/">Home</Link>
                            </li>
                            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500">
                                <Link href="/#about">About</Link>
                            </li>
                            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500">
                                <Link href="/#experience">Experience</Link>
                            </li>
                            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500">
                                <Link href="/#project">Project</Link>
                            </li>
                            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500">
                                <Link href="/#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar;
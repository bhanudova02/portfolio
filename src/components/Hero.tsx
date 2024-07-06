import Link from "next/link";
import React from "react";
import { BiDownArrow } from "react-icons/bi"
interface HeroProps {heading: string;message: string;}
const Hero: React.FC<HeroProps> = ({ heading, message }) => {
    return (<>
        <div className="bg-fixed bg-center bg-cover custom-img">
            <div className="flex items-center h-[40rem] md:h-[46rem] lg:h-[40rem] container-fluid">
                {/* Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0  h-[40rem] md:h-[46rem] lg:h-[40rem] bg-black/70 z-[2] " />
                <div className=" text-white z-[2] mt-0 lg:mt-10 px-2 md:px-0">
                    <h3>Hello, I'm</h3>
                    <h2 className="text-2xl md:text-5xl font-bold">{heading}</h2>
                    <p className="py-2 md:py-5 text-xl leading-7 md:leading-10 lg:leading-10">
                        As a front-end developer, I design captivating and responsive websites using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, ReactJS, and Next.js. Explore my projects to experience my dedication to creating intuitive and user-friendly web experiences.
                    </p>
                    <Link href="/#about"><button className="px-8 py-2 border hover:bg-slate-600"><BiDownArrow /></button></Link>
                </div>
            </div>
        </div>
    </>)
}
export default Hero;


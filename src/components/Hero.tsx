"use client";
import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

interface HeroProps {
  heading: string;
  message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="bg-fixed bg-center bg-cover bg-[url('/bg.jpg')]">
        <div className="flex items-center h-[40rem] md:h-[46rem] lg:h-[40rem] container-fluid">
          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0  h-[40rem] md:h-[46rem] lg:h-[40rem] bg-black/70 z-[2]" />
          <div className="text-white z-[2] mt-0 lg:mt-10 px-2 md:px-0">
            <h3>Hello, I&apos;m</h3>
            <h2 className="text-2xl md:text-5xl font-bold">{heading}</h2>
            <p className="py-2 md:py-5 text-xl leading-7 md:leading-10 lg:leading-10">
              As a front-end developer, I design captivating and responsive websites using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, ReactJS, and Next.js. Explore my projects to experience my dedication to creating intuitive and user-friendly web experiences.
            </p>
            <button onClick={handleScroll} className="mt-6 md:mt-4 lg:mt-2">
              <MdOutlineKeyboardDoubleArrowDown className="animate-bounce bg-black/90 md:bg-black/30 text-5xl p-1 rounded shadow shadow-sky-200 text-indigo-400" />
            </button>
          </div>
        </div>
      </div>
      <div ref={scrollRef} >
     
        <p>{message}</p>
      </div>
    </>
  );
};

export default Hero;

import Image from "next/image";
import { SlBadge } from "react-icons/sl";
import { GiGraduateCap } from "react-icons/gi"
import my_pic from "../../public/my_pic.jpg";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
export default function About() {
    return (<>
        <div id="about" className="container-fluid mx-auto py-20">
            <div>
                <div className="text-center">
                    <p>Get To Know More</p>
                    <h2 className="font-extrabold text-3xl md:text-5xl">About Me</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-2 h-full lg:h-[350px] mt-4 md:mt-8">
                    <div className="p-2 w-full">
                        <div className="flex flex-col lg:flex-row items-center text-center gap-4">
                            <div className="border p-4 w-full lg:w-[30%] rounded-md shadow-md shadow-gray-200">
                                <span className="flex justify-center items-center"><SlBadge size={25} className="text-black" /></span>
                                <h2 className="font-bold text-xl">Experience</h2>
                                <p className="text-gray-700 font-semibold mb-2">
                                    Frontend Development
                                </p>
                                <Link href="/Resume.pdf" target="_blank" download>
                                    <button className="p-2 border hover:bg-[#353535] rounded hover:text-white hover:rounded-md duration-500 font-semibold text-green-800">Download Resume</button>
                                </Link>
                            </div>
                            <div className="border p-4 w-full lg:w-[30%] rounded-md shadow-md shadow-gray-200">
                                <span className="flex justify-center items-center"><GiGraduateCap size={25} className="text-black" /></span>
                                <h2 className="font-bold text-xl">Education</h2>
                                <p className="text-gray-700 font-semibold mb-2">
                                    Bachelor of Arts Degree<br />
                                </p>
                                <Link href="/Resume.pdf" target="_blank">
                                    <button className="p-2 border hover:bg-[#353535] rounded hover:text-white hover:rounded-md duration-500 font-semibold text-green-800">View Resume</button>
                                </Link>
                            </div>
                            <div className="border p-4 w-full lg:w-[30%] rounded-md shadow-md shadow-gray-200">
                                <span className="flex justify-center items-center"><IoShareSocialSharp size={25} className="text-black" /></span>
                                <h2 className="font-bold text-xl mb-4">Social Media</h2>
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="flex items-center justify-center py-[6px]" ><Link href="https://github.com/bhanudova02" target="_blank"><FaGithub className="text-5xl hover:bg-gray-200 p-1 hover:cursor-pointer hover:rounded-full" /></Link></div>
                                    <div className="flex items-center justify-center py-[6px]" ><Link href="https://www.instagram.com/mr._bhanu_03/" target="_blank"><FaInstagram className="text-5xl hover:bg-rose-200 p-1 hover:cursor-pointer hover:rounded-full" /></Link></div>
                                    <div className="flex items-center justify-center py-[6px]" ><Link href="https://wa.me/+916302715653" target="_blank"><FaWhatsapp className="text-5xl hover:bg-green-200 p-1 hover:cursor-pointer hover:rounded-full" /></Link></div>
                                    <div className="flex items-center justify-center py-[6px]" ><Link href="https://t.me/NeverGiveUP_003" target="_blank"><FaTelegram className="text-5xl hover:bg-blue-200 p-1 hover:cursor-pointer hover:rounded-full" /></Link></div>
                                </div>
                            </div>
                        </div>
                        <p className="leading-[34px] mt-2 hidden lg:block">
                            Hello there&#33; 👋 I&#39;m <b>Mr.Bhanu</b>, a passionate web developer with a keen interest in crafting exceptional digital experiences. My journey into the realm of web development began with an innate curiosity about the digital world, and I haven&#39;t looked back since.
                            I specialize in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Next.js, and React.js, focusing on creating visually appealing, user&#45;friendly, and responsive websites and web applications.
                        </p>
                    </div>
                </div>
                <div className="leading-7 mt-2 text-justify block lg:hidden px-2">
                    Hello there&#33; 👋 I&#39;m <b>Mr.Bhanu</b>, a passionate web developer with a keen interest in crafting exceptional digital experiences. My journey into the realm of web development began with an innate curiosity about the digital world, and I haven&#39;t looked back since.
                    I specialize in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Next.js, and React.js, focusing on creating visually appealing, user&#45;friendly, and responsive websites and web applications.
                </div>
            </div>
        </div>
    </>)
}

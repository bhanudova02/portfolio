import Image from "next/image";
import { SlBadge } from "react-icons/sl";
import { GiGraduateCap } from "react-icons/gi"
import my_pic from "../../public/my_pic.jpg";
import Link from "next/link";
// import Resume from "../../public/Resume.pdf"
export default function About() {
    return (<>
        <div id="about" className="flex justify-center items-center max-w-[1240px] m-auto py-20">
           
           
            <div>
                <div className="text-center">
                    <p>Get To Know More</p>
                    <h2 className="font-extrabold text-5xl">About Me</h2>
                </div>


                <div className="mt-40">
                    <div className="flex flex-col md:flex-row gap-4  mt-4">
                        <div className="w-full md:w-[35%]">
                            <Image src={my_pic} width={0} height={0} alt="my_pic" className="w-[25rem] rounded-md shadow-xl" />
                        </div>
                        <div className="w-full md:w-[65%]">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="border shadow-md text-center  py-4 rounded-2xl w-full md:w-[50%] lg:w-max">
                                    <span className="flex justify-center items-center"><SlBadge size={25} className="text-black" /></span>
                                    <h2 className="font-bold text-xl">Experience</h2>
                                    <p className="text-gray-700 font-semibold">
                                        Frontend Development
                                    </p>
                                    <Link href="/Resume.pdf" target="_blank" download>
                                        <button className="p-2 border hover:bg-[#353535] hover:text-white hover:rounded-md duration-500 font-semibold text-green-800">Download Resume</button>
                                    </Link>
                                </div>
                                <div className="border shadow-md text-center  py-4 rounded-2xl w-full md:w-[50%] lg:w-max">
                                    <span className="flex justify-center items-center"><GiGraduateCap size={25} className="text-black" /></span>
                                    <h2 className="font-bold text-xl">Education</h2>
                                    <p className="text-gray-700 font-semibold">
                                        Bachelor of Arts Degree<br />
                                        <Link href="/Resume.pdf" target="_blank">
                                            <button className="p-2 border hover:bg-[#353535] hover:text-white hover:rounded-md duration-500 text-green-600">View Resume</button>
                                        </Link>

                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 block md:hidden lg:block text-lg text-center md:text-start">
                                Hello there&#33; 👋 I&#39;m <b>Mr.Bhanu</b>, a passionate web developer with a keen interest in crafting exceptional digital experiences. My journey into the realm of web development began with an innate curiosity about the digital world, and I haven&#39;t looked back since.<br /><br />
                                I specialize in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Next.js, and React.js, focusing on creating visually appealing, user&#45;friendly, and responsive websites and web applications.
                            </p>
                            <p className="mt-4 hidden md:block lg:hidden">
                                Hello there&#33; 👋 I&#39;m <b>Mr.Bhanu</b>, a passionate web developer with a keen interest in crafting exceptional digital experiences. My journey into the realm of web development began with an innate curiosity about the digital world, and I haven&#39;t looked back since
                            </p>
                        </div>
                    </div>
                    <p className="md:mx-6 mt-4 hidden md:block lg:hidden">
                        I specialize in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Next.js, and React.js, focusing on creating visually appealing, user&#45;friendly, and responsive websites and web applications.
                    </p>
                </div>
            </div>
        </div>
    </>)
}

import { GrMapLocation } from "react-icons/gr";
import {  MdOutlineMail, MdPhoneInTalk } from "react-icons/md";

export default function Contact() {
    return (<>
        <div id="contact" className="bg-gray-50 py-20">
            <div className="container-fluid mx-auto">
                <div className="flex flex-col lg:flex-row  px-2 md:px-0 shadow-md shadow-gray-100">
                    <div className="w-full lg:w-1/3 bg-indigo-500  rounded-tl rounded-bl rounded-tr p-6">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold mt-4">Get in touch</h1>
                        <p className="text-xl text-white pb-10 leading-relaxed font-normal lg:pr-4">
                            I provide front-end support with expertise in HTML5, CSS3, JavaScript ES6, TypeScript, Bootstrap, Tailwindcss, ShadcnUi, DaisyUi ReactJS, and NextJS. 🚀 Proficient in responsive design, I'm here to assist you!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="text-white">
                                    <MdPhoneInTalk />
                                </div>
                                <p className="pl-2 text-white text-base">+91 6302715653</p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-white">
                                    <MdOutlineMail />
                                </div>
                                <p className="pl-2 text-white text-base">bhanudova02@gmail.com</p>
                            </div>
                            <div className="flex items-start">
                                <div className="text-white">
                                    <GrMapLocation className="mt-1" />
                                </div>
                                <p className="pl-2 text-white">Avanigadda
                                    (AP-521121)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 bg-gray-200 rounded-tr rounded-br">
                        <div className="bg-white p-10 my-4 h-fit rounded-tr rounded-br">
                            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div>
                                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Full Name</label>
                                    <input id="FullName" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="text" placeholder="" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Email</label>
                                    <input id="FullName" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="email" placeholder="" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Phone</label>
                                    <input id="FullName" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-gray-800" >Message</label>
                                    <textarea placeholder="" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={5} id="message"></textarea>
                                </div>
                                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
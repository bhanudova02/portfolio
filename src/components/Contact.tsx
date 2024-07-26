"use client";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail, MdPhoneInTalk } from "react-icons/md";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [showModal, setShowModal] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try {
            const response = await emailjs.sendForm(
                "service_duv4p2a",
                "template_fk1vyqd",
                form.current,
                "VmQeCVDyitnq2OwpA"
            );

            if (response.status === 200) {
                console.log("SUCCESS!");
                setShowModal(true);
                form.current.reset();
            } else {
                console.log("FAILED...", response.text);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div id="contact" className="bg-gray-50 py-20">
                    <div className="container-fluid mx-auto">
                        <div className="flex gap-2 lg:gap-0 flex-col lg:flex-row px-2 md:px-0 shadow-md shadow-gray-100">
                            <div className="w-full lg:w-1/3 bg-indigo-500 rounded-tr rounded-br lg:rounded-tr-none lg:rounded-br-none rounded-tl rounded-bl p-6">
                                <h1 className="md:text-4xl text-2xl pb-4 text-white font-bold mt-4">Get in touch</h1>
                                <p className="md:text-xl text-lg text-white pb-10 leading-relaxed font-normal lg:pr-4">
                                    I provide front-end support with expertise in HTML5, CSS3, JavaScript ES6, TypeScript, Bootstrap, Tailwindcss, ShadcnUi, DaisyUi ReactJS, and NextJS.  Proficient in responsive design, I'm here to assist you!
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
                                        <p className="pl-2 text-white">Avanigadda (AP-521121)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3 bg-gray-200 p-1 lg:p-2 rounded-tl rounded-bl lg:rounded-tl-none lg:rounded-bl-none rounded-tr rounded-br">
                                <div className="bg-white p-10 h-fit rounded-tr rounded-br">
                                    <h1 className="text-2xl md:text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Full Name</label>
                                            <input className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="text" placeholder="Enter Your Name" name="Full_Name" />
                                        </div>
                                        <div>
                                            <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Email</label>
                                            <input className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="email" placeholder="Enter Your Email" name="Email" />
                                        </div>
                                        <div>
                                            <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal">Phone</label>
                                            <input className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full md:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" type="text" placeholder="+91 Enter 10 Digits" name="Phone" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-800">Message</label>
                                            <textarea placeholder="" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={5} name="Message"></textarea>
                                        </div>
                                        <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/* Popup modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Message Sent Successfully!</h2>
                        <button
                            className="bg-rose-500 text-white hover:cursor-pointer hover:bg-lime-400 font-bold py-2 px-3 rounded inline-flex items-center text-sm "
                            onClick={() => setShowModal(false)}
                        >
                            Close <IoClose className="text-lg" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

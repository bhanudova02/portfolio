"use client"
import Link from "next/link";
import { useState, FormEvent } from 'react';
import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs"
import supabase from "../../supabase/SuapbaseClient"

export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('entries_data')
            .insert([
                { FirstName: firstName, LastName: lastName, Phone: phone, Message: message }
            ]);

        if (error) {
            console.error('Error updating user:', error);
        } else {
            console.log('User updated successfully:', data);
            alert('Your message was successfully updated for Mr.Bhanu.');
            resetForm();
        }
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setPhone('');
        setMessage('');
    };
    return (<>
        <div id="contact" className="bg-white border">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
                        <div className="flex justify-center">
                            <div className="text-center md:text-center lg:text-start">
                                <h2 className="text-4xl font-semibold my-4 md:my-4">Contact US</h2>
                                <div className="mt-6 md:mt-16">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Location</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">
                                        Avanigadda Mandal<br />
                                        Krishna District<br />
                                        Andhra Pradesh-521121.
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Phone</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">+91 6302715653</p>
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl">Email</h2>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">bhanudova03@gmail.com</p>
                                    <p className="font-bold text-gray-500 mt-1 text-sm md:text-xl lg:text-xs">bhanudova6@gmail.com</p>
                                    <ul className="list-none flex gap-6 border mt-4 ">
                                        <Link href="https://www.facebook.com/bhanu.dova/" target="_blank"><li className="p-2 rounded-full bg-white hover:bg-blue-100"><BsFacebook size={30} className="text-blue-600" /></li></Link>
                                        <Link href="https://www.instagram.com/mr._bhanu_03/" target="_blank"><li className="p-2 rounded-full bg-white"><BsInstagram size={30} className="text-rose-600" /></li></Link>
                                        <Link href="https://wa.me/+916302715653" target="_blank"><li className="p-2 rounded-full bg-white"><BsWhatsapp size={30} className="text-[#51CE5F]" /></li></Link>
                                        <Link href="https://t.me/NeverGiveUP_003" target="_blank"><li className="p-2 rounded-full bg-white"><BsTelegram size={30} className="text-[#4768ff]" /></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="border w-[360px] md:w-[680px] lg:w-[400px]  relative me-0 md:me-0 lg:me-[-210px] bg-white shadow-2xl rounded-md mt-11">
                                <div className="p-7">
                                    <div>
                                        <form onSubmit={handleUpdate}>
                                            <h2 className="font-bold text-xl md:text-2xl lg:text-xl mb-0">Leave a message</h2>
                                            <div className="mt-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                                                <input
                                                    type="text"
                                                    className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium"
                                                    placeholder="First Name"
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    value={firstName}
                                                    required // Make the first name required
                                                />
                                                <input
                                                    type="text"
                                                    className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium"
                                                    placeholder="Last Name"
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    value={lastName}
                                                    required // Make the last name required
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <input
                                                    type="text"
                                                    className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium"
                                                    placeholder="Email or Mobile"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    value={phone}
                                                    required // Make the phone required
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <textarea
                                                    className="border outline-none rounded-md bg-[#F7F7F7] p-3 w-full h-[130px] font-medium"
                                                    placeholder="Please describe what you need"
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    value={message}
                                                    required // Make the message required
                                                />
                                            </div>
                                            <div className="mt-3 pb-0 text-gray-700">
                                                <button type="submit" className="bg-[#F1CF69] rounded-full font-bold text-xs md:text-sm lg:text-sm w-full p-3">
                                                    Send Now
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 md:mt-10 lg:mt-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.7392640937182!2d80.91458017335886!3d16.027082884646333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f396e2f501c5%3A0xcddc620aacba278d!2sGandhi%20Kshetram!5e0!3m2!1sen!2sin!4v1699452992923!5m2!1sen!2sin" className="w-full h-[300px] md:h-[700px] lg:h-[500px]" ></iframe>
                </div>
            </div>
        </div>
    </>)
}
import { BiSolidBadgeCheck } from "react-icons/bi"
export default function Experience() {
    return (<>
        <div className="bg-[#F1EFEF] py-20 pb-28 ">
            <div id="experience" className="container-fluid mx-auto">
                <div className="text-center">
                    <p>Explore My</p>
                    <h2 className="font-bold text-3xl md:text-5xl mb-6">Experience</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 px-2 md:px-0">
                    <div className="border p-4 rounded-md w-full shadow border-box-one bg-white">
                        <h2 className="text-center text-xl md:text-3xl font-bold">Frontend Development</h2>
                        <div className="flex justify-center items-center mt-4 md:mt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> HTML5</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> CSS3</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> BootStrap5</h2>
                                    <p>Experienced</p>
                                </div>

                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> TailwindCss</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> JavaScript</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> TypeScript</h2>
                                    <p>Experienced</p>
                                </div>

                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> ReactJs18</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> Next JS</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> DaisyUi</h2>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 w-full rounded-md shadow border-box-two bg-white">
                        <h2 className="text-center text-xl md:text-3xl font-bold">Backend Development</h2>
                        <div className="flex justify-center items-center mt-4 md:mt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8">
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> NodeJs</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> Express JS</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> MongoDB</h2>
                                    <p>Experienced</p>
                                </div>
                                <div className="py-2 px-4 text-center shadow rounded-md">
                                    <h2 className="font-bold flex items-center justify-center text-center"><BiSolidBadgeCheck /> Github</h2>
                                    <p>Experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

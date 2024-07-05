import Image from "next/image";

import Link from "next/link";
export default function Projects() {
    const projectData = [
        {
            imgSrc: "/PSP_Project.png",
            title: "Project One",
            Link: "https://plpl-seeds.vercel.app"
        },
        {
            imgSrc: "/PSP_ProjectTwo.png",
            title: "Project Two",
            Link: "https://plpl-infotech.vercel.app"
        },
        {
            imgSrc: "/project_two.png",
            title: "Project Three",
            Link: "https://carsproject-six.vercel.app"
        },
        {
            imgSrc: "/UI_ComponentProject.png",
            title: "Project Four",
            Link: "https://ui-components-next-js.vercel.app"
        },
        {
            imgSrc: "/project_one.png",
            title: "Project Five",
            Link: "https://ui-components-theta.vercel.app"
        }
    ]



    return (<>
        <div className="flex justify-center items-center py-20" id="project">
            <div>
                <div className="text-center">
                    <p>Browse My Recent</p>
                    <h1 className="text-5xl font-bold">Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
                    {
                        projectData.map((data: any, i: number) => (
                            <div key={i} className="flex justify-center items-start">
                                <div>
                                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border project-border">
                                        <div className="flex justify-center items-center p-4">
                                            <Image width={600} height={600} className="w-[20rem] h-[10rem]" src={data.imgSrc} alt="Sunset in the mountains" />
                                        </div>
                                        <div className="px-6 pt-2">
                                            <div className="font-bold text-xl mb-2 text-center">{data.title}</div>
                                        </div>
                                        <div className="px-6 pb-2 text-center">
                                            <Link href={data.Link} target="_blank"><span className="inline-block border duration-500 hover:bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Live Demo</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}

import Image from "next/image";

import Link from "next/link";
export default function Projects() {
    const projectData = [

        {
            imgSrc: "/Rajesh_seeds.png",
            title: "Project One",
            Link: "https://rajesh-seeds.vercel.app/"
        },
        {
            imgSrc: "/project_one.png",
            title: "Project Two",
            Link: "https://ui-components-sooty.vercel.app/"
        },
        {
            imgSrc: "/lawyer_project.png",
            title: "Project Three",
            Link: "https://lawyer-portfolio-gilt.vercel.app/"
        },
        {
            imgSrc: "/PSP_ProjectTwo.png",
            title: "Project Four",
            Link: "https://office-site-ebon.vercel.app/"
        },

        {
            imgSrc: "/PSP_Project.png",
            title: "Project Five",
            Link: "https://plpl-sedds.vercel.app/"
        },
        {
            imgSrc: "/project_two.png",
            title: "Project Six",
            Link: "https://blog-project-nine-pink.vercel.app/"
        },
    ]
    return (<>
        <div className="container-fluid mx-auto py-20" id="project">
            <div>
                <div className="text-center">
                    <p>Browse My Recent</p>
                    <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 px-2 md:px-0">
                    {
                        projectData.map((data: any, i: number) => (
                            <div key={i}>
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
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}

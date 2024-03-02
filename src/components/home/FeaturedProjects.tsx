import Image from "next/image"
import Projects from "./Projects"
import { bebas_neue } from "@/app/font"
export default function FeaturedProject(){
    return (
        <div id='projects' className={`text-white py-10  pl-2 md:w-5/6 md:mx-auto md:py-24`}>
            <h1 className={`${bebas_neue.className} text-3xl pb-2 md:text-7xl`}>
                Featured Projects
            </h1>
            <p className={`text-[#C7C7C7] text-sm md:text-lg md:w-1/2`}>
                Here are some of the selected projects that
                showcase my passion for front-end development.
            </p>    
            <Projects/>
        </div>
    )
}
import Image from "next/image"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Project(
   { src,
    alt,
    title,
    description,
    year,
    role,
    liveDemo,
    gitHub
    } :
    {
        src : string,
        alt : string,
        title : string,
        description : string,
        year : string,
        role : string,
        liveDemo : string
        gitHub : string

    }
){
    return(
            <div className={`text-white flex flex-col gap-6 p-2 md:flex-row md:justify-around `}>
                <div className="md:w-[45%]">
                    <Image 
                        className="w-full h-full"
                        height={343} width={343}
                        src={src}
                        alt={alt}>
                    </Image>
                </div>

                <div className={`flex flex-col gap-4 my-auto md:w-[45%]`}>
                    <h1 className={`text-xl md:text-3xl	`}>{title}</h1>
                    <p className={`text-[#C7C7C7] text-sm md:text-lg`}>{description}</p>
                    <div>
                        <h2 className={`font-semibold border-b border-[#555555] py-2`}> Project Info</h2>
                        <div className = {`text-[##555555] text-xs flex justify-between border-b border-[#555555] py-2 md:text-base`}>
                            <p>Year</p>
                            <p>{year}</p>
                        </div>
                        <div className = {`text-[##555555] text-xs flex justify-between border-b border-[#555555] py-2 md:text-base`}>
                            <p>Role</p>
                            <p>{role}</p>
                        </div>
                    </div>
                    <div className={`text-[#D3E97A] flex text-sm gap-4`}>
                        <div className={`border-[#D3E97A] border-b`}><Link href='#'>LIVE DEMO <NorthEastIcon /></Link></div>
                        <div className={`border-[#D3E97A] border-b`}> <Link href='#'>SEE ON GITHUB <FaGithub style={{display: "inline"}}/></Link></div>
                    </div>
                </div>
            </div>
    )
}

export default function Projects(){
    return (
        <div className={`pt-6 flex flex-col gap-4 md:gap-12`}>
            <Project
                src = {"/Images/adventure_time.svg"}
                alt = {"alt"}
                title = {"Promotional landing page for our favorite show"}
                description ={
                    `Teamed up with a designer to breathe life into a promotional webpage
                     for our beloved show, Adventure Time. Delivered a fully
                      responsive design with dynamic content capabilities, 
                      seamlessly integrating a newsletter feature to 
                      keep fans updated with the latest adventures.`
                }
                year = {'2023'}
                role = {'Front-end Developer'}
                liveDemo = {"link"}
                gitHub = {"link"}
            />

            <Project
                src = {"/Images/news.svg"}
                alt = {"alt"}
                title = {"Blog site for World News"}
                description ={
                    `Mastered CSS Grid complexities in building an innovative
                     news homepage, navigating intricate design decisions 
                     for a seamless user experience. Leveraged the challenge
                      to enhance skills in  front-end development.`
                }
                year = {'2023'}
                role = {'Front-end Developer'}
                liveDemo = {"link"}
                gitHub = {"link"}
            />
            <Project
                src = {"/Images/shoes.svg"}
                alt = {"alt"}
                title = {"E-commerce product page"}
                description ={
                    `Successfully crafted an engaging product page featuring 
                    a dynamic lightbox gallery and seamless cart functionality,
                     showcasing proficiency in JavaScript development.`
                }
                year = {'2022'}
                role = {'Front-end Developer'}
                liveDemo = {"link"}
                gitHub = {"link"}
            />
        </div>
    )
}
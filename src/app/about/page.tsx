import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { bebas_neue } from "../font";
import Image from 'next/image';
import Compabilities from "@/components/about/Capabilities";
import Experiances from "@/components/about/Experiances";
import Contact from "@/components/contact/contact";
export default function about(){
    return(
        <div>
             <div className="text-white flex flex-col gap-4 mt-10 w-5/6 mx-auto md:flex-row">
                    <h1 className={`${bebas_neue.className} text-5xl md:w-[40%] md:text-8xl`}>
                        ABOUT ME
                    </h1>

                    <div className="flex flex-col gap-4 md:w-[50%]">
                        <p className="text-xl md:text-3xl">
                            I am a front-end developer based in Sydney. 
                            Has Mechanical Engineering background. 
                        </p>
                        <p className="text-sm text-[#C7C7C7] md:text-base">
                            I am a front-end developer based in Sydney looking for
                            exciting opportunities. Has Mechanical Engineering background. 
                            Likes to focus on accessibility when developing. Passionate
                            and curious about solving problems. Currently, 
                            I’m exploring Reactjs, Webflow and a bit of Designing.
                            While I am not programming, I enjoy playing football, 
                            photography and playing Valorant. Learning more to improve skill.
                        </p>

                        <div className={`flex gap-2`}>
                        <div className={`flex items-center justify-between bg-[#D3E97A] p-2     md:p-3 rounded-3xl gap-1`}>
                            <p className="text-black text-xs font-black md:text-base">
                                DOWNLOAD RESUME
                            </p>
                            <div className={`inline-block rounded-full border border-black p-1 bg-black`}>
                            <FaDownload />
                            </div>
                        </div>
                            <div className={`p-2 inline-block rounded-full bg-[#222222] self-center text-[#D3E97A] md:text-xl`}><FaLinkedin/></div>
                            <div className={`p-2 inline-block rounded-full bg-[#222222] self-center text-[#D3E97A] md:text-xl`}><FaGithub/></div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#C7C7C7] rounded-xl mt-4 w-5/6 mx-auto md:my-14`}>
                    <Image height={343} width={343}
                    className="w-[65%] mx-auto"
                    src={"/Images/about.svg"}
                    alt={"picture of the owner"}>
                    </Image>
                </div>
                <Compabilities/>
                <div className="border-b border-[#484848]"></div>
                <Experiances/>
                <div className="border-b border-[#484848]"></div>
                <Contact/>
            </div>
    )
}
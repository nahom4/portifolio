import { bebas_neue } from "@/app/font"
import Image from "next/image"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Info(){
    return (
        <div className={`text-[#FFFFFF] p-2 md:flex md:flex-row md:justify-around md:pb-16 border-b border-grey`}>
            <div className="md:w-1/3 my-auto flex flex-col gap-4">
                <h1 className={`${bebas_neue.className} text-5xl md:text-8xl`}>
                    HI, I AM
                </h1>
                <h1 className={`${bebas_neue.className} text-5xl md:text-8xl`}>
                    NAHOM KIFLE
                </h1>
                <p className={`text-[#C7C7C7] md:text-lg`}>
                    A Sydney based front-end developer passionate
                    about building accessible and user friendly websites.
                </p>
                <div className={`flex gap-2`}>
                    <div className={`flex items-center justify-between bg-[#D3E97A] p-1 rounded-3xl gap-1`}>
                        <p className="text-black text-sm font-bold">
                            CONTACT ME
                        </p>
                        <div className={`inline-block rounded-full border border-black p-1 bg-black`}>
                            <NorthEastIcon />
                        </div>
                    </div>
                    <div className={`p-2 inline-block rounded-full bg-[#222222] self-center text-[#D3E97A]`}><FaLinkedin/></div>
                    <div className={`p-2 inline-block rounded-full bg-[#222222] self-center text-[#D3E97A]`}><FaGithub/></div>
                </div>
            </div>

            <div className={`bg-slate-400 rounded-xl mt-4 md:w-1/2`}>
                <Image height={378} width={343}
                className="w-full h-full"
                src={"/Images/potrait.svg"}
                alt={"picture of the owner"}>
                </Image>
            </div>
        </div>
    )
}
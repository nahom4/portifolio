import { bebas_neue, manrope } from "@/app/font";
import { FaGithub, FaLinkedin, FaTwitter,} from "react-icons/fa";

function Tile({
    label,
    type,
} :{
    label : string,
    type : string
}
){
    return(
        <div className="flex flex-col text-[#C7C7C7] py-2 md:text-base md:pb-5">
            <label>{label}</label>
            <input type={type} className={`bg-[#1f1e1e] p-2 mt-2` }></input>
        </div>
    )
}
export default function Contact(){
    return(
        <div id ='contact' className="text-white text-xs py-10 w-[90%]  md:flex-row md:justify-around mx-auto md:my-10">
            <div className="md:flex md:justify-around">
                <div className="flex flex-col gap-2 md:w-[45%] md:text-base font-light">
                    <h1 className={`${bebas_neue.className} text-4xl md:text-7xl`}>
                        Let’s connect
                    </h1>
                    <p className="text-[#C7C7C7]">
                        Say hello at nahomamare52@gmail.com
                    </p>
                    <p className="text-[#C7C7C7]">
                        For more info, here’s my resume
                    </p>
                    <div className={`flex gap-6 pt-4`}>
                        <div className={`inline-block self-center text-[#D3E97A] text-xl md:text-2xl`}><FaLinkedin/></div>
                        <div className={`inline-block self-center text-[#D3E97A] text-xl md:text-2xl`}><FaGithub/></div>
                        <div className={`inline-block self-center text-[#D3E97A] text-xl md:text-2xl`}><FaTwitter/></div>
                    </div>
                </div>

                <div className=" md:w-[45%]">
                    <form className="flex flex-col gap-2 mt-8 md:m-0">
                        <Tile label = {"Name"} type={"text"}/>
                        <Tile label = {"Email"} type={"email"}/>
                        <Tile label = {"Subject"} type={"text"}/>
                        <div className={`flex flex-col md:text-base md:gap-2`}>
                            <label>
                                Message
                            </label>
                            <textarea className={`py-10 bg-[#1f1e1e]`}>

                            </textarea>
                        </div>
                        <button type="submit" className={`bg-[#D3E97A] rounded-3xl py-2 px-4 md:py-4 md:px-8 mt-4 self-start text-black font-bold md:font-black`}>
                            SUBMIT
                        </button>
                    </form>
                    <p className="py-10 md:hidden">© 2024 Nahom Kifle</p>
                </div>
            </div>

            <p className="hidden py-10 md:block mx-28">© 2024 Nahom Kifle</p>
        </div>
    )
}
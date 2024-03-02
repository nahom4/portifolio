import Image from "next/image"
import Link from 'next/link'
export default  function About(){
    return(
        <div id='about' className={`text-[#C7C7C7] flex flex-col gap-4 p-2 pb-4  md:pt-20 md:pb-52 md:w-5/6 md:mx-auto`}>
                
                <div className="md:flex justify-around">
                    <h1 className="hidden md:block md:text-6xl md:font-bold text-white md:w-[30%]">
                        ABOUT ME
                    </h1>

                    <div className="md:w-[50%]">
                        <p className="md:text-2xl md:mb-8 md:font-bold">
                            I am a front-end developer based in Sydney. 
                            Has Mechanical Engineering background. 
                        </p>
                        <p className="hidden md:block text-lg">
                            I am a front-end developer based in Sydney looking for
                            exciting opportunities. Has Mechanical Engineering background. 
                            Likes to focus on accessibility when developing. Passionate
                            and curious about solving problems. Currently, 
                            I’m exploring Reactjs, Webflow and a bit of Designing.
                            While I am not programming, I enjoy playing football, 
                            photography and playing Valorant. Learning more to improve skill.
                        </p>
                    </div>
                </div>

                <div className={`inline-block md:mx-auto md:text-lg md:mt-8`}>
                    <Link className = {`text-[#D3E97A] inline-block font-bold text-sm border-b border-b-[#D3E97A]`} href='#'><p className={`inline-block`}>MORE ABOUT ME</p></Link>
                </div>

                <div className="pt-12 md:hidden">
                    <Image height={378} width={343}
                        src={"/Images/facing_sideways.svg"}
                        alt={"picture of the owner"}>
                    </Image>
                </div>
        </div>
    )
}
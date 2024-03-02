import { bebas_neue, manrope } from "@/app/font"

function Experiance(
    {title,
    time,
    description}:{
        title : string,
        time : string,
        description : string
    }
){
    return(
        <div>
                <h1 className="text-lg	font-medium md:text-2xl	">
                    {title}
                </h1>
                <p className="text-[#C7C7C7] mb-2">
                    {time}
                </p>
                <p className={`${manrope.className} text-[#C7C7C7] `}>
                    {description}
                </p>
        </div>
    )
}
export default function Experiances() {
    return(
        <div className="text-white flex flex-col gap-5 my-8 w-[90%]  md:flex-row md:justify-around mx-auto md:my-20">
            <h1 className={`${bebas_neue.className} text-4xl font-bold md:text-7xl md:w-[45%]`}>
                My Experience
            </h1>
            <div className="md:w-[45%] flex flex-col gap-5">
                <Experiance 
                    title="Freelance Developer"
                    time = "Nov 2023 — Present "
                    description="Ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur."
                />
                <Experiance 
                    title="Front-End Intern"
                    time = "Sep 2023 — Nov 2023"
                    description="Ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur."
                />
            </div>

        </div>
    )
}
import { bebas_neue, manrope } from "@/app/font"

function Skill({name}:{name: string}){
    return(
        <div className="p-2 rounded-3xl border border-[#484848] md:p-4">
            {name}
        </div>
    )
}

export default function Compabilities(){
    return(
        <div className="text-white flex flex-col gap-4 my-11 w-[90%]  md:flex-row md:justify-around mx-auto md:my-20">
            <h1 className={`${bebas_neue.className} text-4xl md:w-[45%] md:text-7xl	`}>
                My Capabilities
            </h1>

            <div className="md:w-[45%] flex flex-col gap-5">
                <p className={`${manrope.className} text-[#C7C7C7] text-sm md:text-lg`}>
                    I am always looking to add more skills.Morbi egestas
                    neque eu blandit fermentum. Nulla ac lobortis ligula.
                    Pellentesque ac ex at purus faucibus tristique ut et dolor. 
                </p>

                <div className="flex flex-wrap gap-2">
                    <Skill name={'PYTHON'}/>
                    <Skill name={'JAVA SCRIPT'}/>
                    <Skill name={'GOLANG'}/>
                    <Skill name={'DART'}/>
                    <Skill name={'NEXT'}/>
                    <Skill name={'ASP.NET'}/>
                    <Skill name={'NEST.JS'}/>
                    <Skill name={'FLUTTER'}/>
                </div>
            </div>
        </div>
    )
}
import About from "../about/About";
import Contact from "../contact/contact";
import FeaturedProject from "./FeaturedProjects";
import Info from "./Info";

export  default function Main(){
    return (
        <main>
            <Info/>
            <div className="border-b border-grey"></div>
            <FeaturedProject/>
            <div className="border-b border-grey"></div>
            <About/>
            <div className="border-b border-grey"></div>
            <Contact/>
        </main>
    )
}
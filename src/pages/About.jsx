import Nav from "../component/Navbar"
import Cards from "../component/Cards"
import { useContext } from "react"
import {ModeContext} from "../context/context"
function About() {

const { isdark, setisdark } = useContext(ModeContext);
    return (
        <>
            <div className={isdark? "bg-black text-white h-screen" : "bg-white text-black h-screen"}>
                <Nav />
                <Cards />
            </div>

        </>

    )
}
export default About
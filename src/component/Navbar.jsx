import { Link } from "react-router-dom"
import { GiBedLamp } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
function Nav() {
    return(
        <div className="w-full h-[80px]  flex items-center justify-around border-b-2">  
        <div className="logo flex items-center gap-2">
            <GiBedLamp  className="text-3xl"/>
            <div className= " uppercase ">
                <h1>LUXORA</h1>
                <h1>Brill</h1>
            </div>
            
        </div>
        <div className=" w-[400px]  flex items-center justify-between">
            <Link to={'/'}>
            Home
            </Link>
             <Link to={'/product'}>
             Product
            </Link>
             <Link to={'/contact'}>
             Contact Us
            </Link>
        </div>
        <div className=" flex items-center">
            <input type="text" className="bg-[#72604257] rounded-xl" />
            <FaMagnifyingGlass className="relative  text-[#7b7a7aef] right-5" />
            
        </div>
        </div>
    )
}
export default Nav
import { GiBedLamp } from "react-icons/gi";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <div className=" flex gap-5 w-full h-[70vh]  ">
            
            <div className=" flex flex-col items-center gap-10 justify-center w-[100%] h-[100%] ">
                <div className="flex justify-center items-center">
                <GiBedLamp className=" text-9xl" />
                <div className="text-8xl uppercase ">
                    <h1>LUXORA</h1>
                    <h1>Brill</h1>
                </div>

            </div>
            <Link to= {'/product'}>
                        <div><button className="w-[200px] hover:bg-[#726042] h-10 text-white rounded-2xl bg-[#72604257]">view product</button></div>
</Link>
            </div>
            <div>
               
            </div>
        </div>
    )
}
export default Hero
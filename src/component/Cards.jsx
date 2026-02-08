import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi2";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import Data from "../json/Cards.json";
import { useState } from "react";import { useContext } from "react"
import {ModeContext} from "../context/context"

function Cards() {
    const [islight, setislight] = useState(false)
    const {isdark, setisdark} = useContext(ModeContext)
    const [ishover, setishover] = useState(null)
    return (
        <div className>
            <div className="h-[400px] flex flex-col gap-10">
                <div className="flex justify-between border-t-2 ">
                    <div className="flex items-center justify-center text-2xl gap-2">
                        <HiOutlineLightBulb />
                        <button onClick={() => setislight(!islight)} >x</button>
                        <HiLightBulb className={islight ? "text-yellow-500" : "text-gray-400"} />
                    </div>
                    <div className="flex items-center justify-center text-2xl gap-2 p-2 rounded">
                        <IoMoon />
                        <button onClick={() => setisdark(!isdark)}>x</button>
                        <IoIosSunny />
                    </div>
                </div>

                <div className="flex w-screen justify-around gap-3">
                    {Data.map((elem) => (
                        <div
                            key={elem.id}
                            className="w-[400px] h-[450px] border  flex flex-col items-center"
                            onMouseEnter={() => setishover(elem.id)}
                            onMouseLeave={() => setishover(null)}

                        >
                            <img
                                src={ishover === elem.id
                                    ? (isdark ? elem.darkon : elem.lighton)
                                    : isdark
                                        ? (islight ? elem.darkon : elem.darkoff)
                                        : (islight ? elem.lighton : elem.lightoff)}
                                alt={elem.title}
                                className="w-full h-[400px] object-cover"
                            />
                            <h1 className="mt-2 font-bold">{elem.title}</h1>
                            <p className="text-gray-600">{elem.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;

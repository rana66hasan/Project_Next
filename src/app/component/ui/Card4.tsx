import { card1 } from "@/app/interface"
import Image from "next/image"

function Card4({ props }: { props: card1 }) {
    return (
        <div className="2xl:p-15 lg:p-12.5 max-lg:p-10 flex flex-col 2xl:gap-15 lg:gap-12.5 max-lg:gap-10 border-2 border-gray-15 rounded-lg bg-white shadow-[4px_4px_0px_2px_#1E1E1E] w-[50%] max-md:w-fit transform transition duration-300 hover:scale-105 hover:-translate-y-2 ">
            <div className="flex justify-between">
                <h3 className="font-bold text-gray-10  2xl:text-[48px] lg:text-[38px] max-lg:text-[30px]">{props.head}</h3>
                <Image
                    src={props.img}
                    alt="imgMissionAndVission"
                    width={80}
                    height={80}
                />
            </div>
            <p className="2xl:text-[20px] font-medium text-gray-20 text-[16px]">{props.text}</p>
        </div>
    )
}

export default Card4

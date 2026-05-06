import { card2 } from "@/app/interface"
import Image from "next/image"

function Card2({ data }: { data: card2 }) {
    return (
        <div className="rounded-xl bg-white border-2 border-gray-15 shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:p-12.5 flex flex-col 2xl:gap-7.5 p-10 gap-6 2xl:w-106 w-85 max-md:p-7.5 max-md:gap-5  justify-center items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2">
            <Image
                src={data.img}
                alt="photoToPerson"
                height={80}
                width={80}
                className="2xl:w-20 2xl:h-20 w-16 h-16"
            />
            <h4 className="2xl:text-[24px] text-gray-20 font-bold text-[20px]">{data.name}</h4>
            <Image
                src="/imges/stars.png"
                alt="photoToPerson"
                height={24}
                width={140}
            />
            <p className="2xl:text-[20px] text-gray-20 text-[16px]">{data.text}</p>
        </div>
    )
}

export default Card2

import { rectangle } from "@/app/interface"
import Image from "next/image"

function RectangleAbout({ props }: { props: rectangle }) {
    return (
        <div className="flex justify-between 2xl:gap-12.5 gap-10 items-center max-md:flex-col max-md:items-start transform transition duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center rounded-xl border-2 border-gray-15 bg-white shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:py-7.5 py-6 2xl:px-12.5 px-7.5 2xl:gap-5 gap-2  2xl:w-91 w-75">
                <Image
                    src="/imges/imgAboutSection4.png"
                    alt="imgRectangle"
                    width={87}
                    height={87}
                    className="max-2xl:w-15 max-2xl:h-15 max-lg:w-12.5 max-lg:h-12.5"
                />
                <p className="2xl:text-[68px] text-[48px] max-lg:text-[38px] font-bold text-gray-10 ">{props.number}</p>
            </div>
            <div className="flex flex-col w-[70%] max-md:w-full">
                <h3 className="font-bold 2xl:text-[28px] text-[24px] text-gray-10">{props.head}</h3>
                <p className="font-medium 2xl:text-[20px] text-[16px] text-gray-20">{props.text}</p>
            </div>
        </div>
    )
}

export default RectangleAbout

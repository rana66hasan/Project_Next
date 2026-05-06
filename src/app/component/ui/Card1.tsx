import { card1 } from "@/app/interface"
import Image from "next/image"

function Card1({ props }: { props: card1 }) {
  return (
    <div className="w-126 max-sm:w-80 relative flex flex-col bg-white border-2 border-gray-15 rounded-xl shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:gap-5 2xl:pt-20 2xl:pb-12.5 2xl:px-12.5 pt-15 px-10 pb-10 gap-4 max-md:pt-12.5 max-md:pr-10 max-md:pb-7.5 max-md:pl-7.5 mt-9 transform transition duration-300 hover:scale-105 hover:-translate-y-2">
      <Image
        src={props.img}
        alt="imgCardHomr"
        width={74}
        height={74}
        className="absolute -top-9 left-9 "
      />
      <h4 className="2xl:text-[28px] font-bold text-gray-10 text-[24px] max-md:text-[22px] ">{props.head}</h4>
      <p className="2xl:text-[20px] text-[14px] text-gray-30 max-md:text-[14px]">{props.text}</p>
    </div>
  )
}

export default Card1

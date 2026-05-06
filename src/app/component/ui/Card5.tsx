import { card5 } from "@/app/interface"
import Image from "next/image"

function Card5({ props }: { props: card5 }) {
    return (
        <div className="flex flex-col rounded-xl border-2 bg-white border-gray-15 shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:gap-7.5 max-2xl:gap-6 2xl:p-12.5 max-2xl:p-10 max-md:p-7.5 w-[45%] max-lg:w-full transform transition duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="flex justify-between 2xl:gap-5 max-2xl:gap-4">
                <div className="flex items-center 2xl:gap-4 max-2xl:gap-3">
                    <Image
                        src={props.img}
                        alt="imgPeople"
                        width={100}
                        height={100} />
                    <h3 className="font-extrabold 2xl:text-[30px] max-2xl:text-[24px] text-gray-20">{props.head}</h3>
                </div>
                <Image
                    src="/imges/ButtonAbout.png"
                    alt="imgPeople"
                    width={56}
                    height={56}
                />
            </div>
            <div className="border-2 border-gray-15 bg-orange-97  flex flex-col 2xl:gap-5 max-2xl:gap-4 max-md:gap-3 2xl:p-7.5 max-md:p-5 max-2xl:p-6 rounded-xl">
                <h3 className="font-semibold 2xl:text-[24px] max-2xl:text-[20px] text-gray-20">{props.head2}</h3>
                <p className="font-medium 2xl:text-[20px] max-2xl:text-[16px] text-gray-20">{props.text}</p>
            </div>
        </div>
    )
}

export default Card5

import { card3 } from "../../interface"

function Card3({ data }: { data: card3 }) {
    return (
        <div className="border-2 border-gray-15 bg-white shadow-[6px_6px_0px_2px_#1E1E1E] flex flex-col items-center justify-between rounded-xl 2xl:w-193.25 2xl:p-20 2xl:gap-20 w-155 p-15 gap-15 max-md:w-89.5 max-md:gap-10 max-md:p-10 transform transition duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="flex flex-col items-center justify-between 2xl:gap-12.5 gap-10 max-md:gap-7.5">
                <div className="flex flex-col items-center justify-between 2xl:gap-7.5 gap-6 max-md:gap-5">
                    <h3 className="2xl:text-[48px] text-[34px] max-md:text-[28px] text-gray-10 font-bold">{data.head}</h3>
                    <div className="flex gap-2.5 relative ">
                        <div className="w-5 h-5 border-2 border-gray-15 rounded-[10px] absolute -left-4 -top-1"></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="2xl:w-23.25 w-18.5 max-md:w-8.75  py-1.5 pr-1.5 bg-orange-80 "> <div className="2xl:w-21.75 w-17 b max-md:w-7.5 border-2 border-black"></div></div>
                        <div className="w-5 h-5 border-2 border-gray-15 rounded-[10px] absolute -right-4 -top-1"></div>
                    </div>
                </div>
                <p className="2xl:text-[20px] text-[16px] text-gray-30">{data.text}</p>
            </div>
            <button className="2xl:text-[20px] text-[18px] text-gray-20 bg-orange-90 border-2 border-gray-15 rounded-xl w-full text-center py-4.5 shadow-[4px_4px_0px_2px_#1E1E1E]">Learn More →</button>
        </div>
    )
}

export default Card3

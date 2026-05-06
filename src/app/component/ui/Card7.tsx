import { rectangle } from "@/app/interface"

function Card7({ props }: { props: rectangle }) {
    return (
        <div className="w-125 max-[1200px]:w-100 max-[1000px]:w-full transform transition duration-300 hover:scale-105 hover:-translate-y-2 " >
            <div className="flex flex-col gap-0 items-center justify-center w-fit ">
                <div className="border-2 border-gray-15 rounded-xl w-fit text-gray-10 h-26 2xl:text-[60px] text-[44px] max-md:text-[40px] font-extrabold shadow-[6px_6px_0px_2px_#1E1E1E] bg-white py-3.5 px-7.5 ">
                    0{props.number}
                </div>
                <div className="w-5 h-5 rounded-4xl bg-white border-2 border-gray-15 -m-2"></div>
                <div className="px-1.5 bg-orange-80 h-17 mt-2">
                    <div className="border-2 border-black h-full "></div>
                </div>
            </div>
            <div className="border-2 border-gray-15 bg-white shadow-[6px_6px_0px_2px_#1E1E1E] flex flex-col gap-5 2xl:p-12.5 p-10 max-md:p-7.5 rounded-xl ">
                <h3 className="2xl:text-[40px] text-[30px] max-md:text-[26px] text-gray-10 font-bold ">{props.head}</h3>
                <p className="2xl:text-[20px] text-[18px] text-gray-30 font-medium">{props.text}</p>
            </div>
        </div>
    )
}

export default Card7

import { TopSection } from "@/app/interface"

function HeaderSection({data}:{data: TopSection}) {
    return (
        <div className="2xl:px-75 lg:px-50 text-center">
            <button className="rounded-lg 2xl:py-2.5 py-2 px-3.5 2xl:px-5 bg-white border-2 border-black 2xl:text-[18px] text-[16px] max-md:text-[14px] text-gray-20 transform transition duration-300 hover:bg-orange-65 hover:-translate-y-1 hover:border-none hover:text-white">{data.textButton}</button>
            <h3 className="2xl:text-[58px] text-gray-15 font-bold text-[48px] max-md:text-[38px]">{data.head}</h3>
            <p className="2xl:text-[20px] text-[16px] text-gray-20 ">{data.text}</p>
        </div>
    )
}

export default HeaderSection

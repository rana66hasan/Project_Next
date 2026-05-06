import { TopSection } from "@/app/interface"
import Image from "next/image"

function HeroSection({ props }: { props: TopSection }) {
    return (
        <div className={`relative flex items-center max-md:text-center ${props.data ? "max-[1260px]:flex-col" : "max-md:flex-col"}  justify-between border-2 border-gray-15 shadow-[8px_8px_0px_1px_#1E1E1E] bg-white 2xl:py-37.5 2xl:px-30  lg:py-25 lg:px-20 py-12.5 px-7.5 gap-12.5 max-md:gap-5 rounded-xl transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-90`}>
            <Image
                src="/imges/imgeTopHeader.png"
                alt="HeroSectionImg"
                width={120}
                height={110}
                className="absolute top-0 left-0 2xl:w-50 2xl:h-50"
            />
            <div className={`w-[48%]   ${props.data ?"max-[1260px]:w-fit max-[1260px]:items-center":"max-md:w-fit"}  flex flex-col gap-3.5 max-2xl:gap-2.5 max-md:items-center`}>
                <button className="text-gray-20 text-[18px] rounded-lg py-2.5 px-5 border-2 border-gray-15 font-medium w-fit ">{props.textButton}</button>
                <h3 className="font-bold 2xl:text-[48px] lg:text-[38px] text-[28px] ">{props.head}</h3>
            </div>
            <div className={`w-[52%] ${props.data ?"max-[1260px]:w-fit":"max-md:w-fit"} flex flex-col 2xl:gap-12.5 gap-7.5`}>
                <p className="  2xl:text-[20px]  text-[16px] font-medium text-gray-20">{props.text}</p>
                <div className="flex flex-wrap 2xl:gap-5 gap-4 justify-between max-[620px]:flex-col  items-center">
                    {
                        props.data?.map((item, index) => {
                            return (
                                <div key={index} className="w-[48%] max-[620px]:w-full flex border-2 flex-nowrap border-gray-15 bg-orange-95 2xl:p-4 p-3 gap-2 rounded-xl">
                                    <Image
                                        src={item.Img}
                                        alt="ImgHero"
                                        width={40}
                                        height={40}
                                        className="2xl:w-10 2xl:h-10 max-lg:w-8 max-lg:h-8"
                                    />
                                    <p className="2xl:text-[20px] text-[16px] text-gray-15 font-medium">{item.Text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection

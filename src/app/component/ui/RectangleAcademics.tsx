'use client'
import { rectangleAcademics } from "@/app/interface"
import Image from "next/image"
import { useEffect, useState } from "react"

function RectangleAcademics({ props }: { props: rectangleAcademics }) {
    const [startIndex, setStartIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(3)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setCardsPerView(1)
            } else if (window.innerWidth < 1210) {
                setCardsPerView(2)
            } else if (window.innerWidth < 1440) {
                setCardsPerView(3)
            }
            else {
                setCardsPerView(4)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const total = props.img.length
    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % total)
    }
    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + total) % total)
    }
    // loop display
    const visibleCards = []
    for (let i = 0; i < cardsPerView; i++) {
        visibleCards.push(props.img[(startIndex + i) % total])
    }
    return (
        <div className="flex flex-col border-2 border-gray-15  bg-white rounded-lg shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:gap-12.5 gap-7.5 max-md:gap-5 2xl:p-12.5 max-md:p-7.5 p-10 pt-0 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-90">
            <div className="flex -mt-37.5 gap-10 2xl:px-12.5  px-10 max-xl:px-7.5 max-sm:px-1 justify-between max-[850px]:justify-center">
                {visibleCards.map((item, index) => (
                    <Image
                        src={item}
                        alt="arrow"
                        width={344}
                        height={304}
                        key={index}
                        className="max-2xl:W-85 max-2xl:h-58.5  max-md:w-75 max-md:h-50 transform transition duration-300 hover:scale-105 hover:-translate-y-2 "
                    />
                ))}
            </div>
            <div className="flex justify-between max-[600px]:flex-col-reverse max-[600px]:items-center">
                <h3 className="2xl:text-[40px] text-[34px] max-md:text-[28px] font-bold text-gray-10">{props.head}</h3>
                <div className="flex gap-5">
                    <button onClick={handlePrev} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:border-none">
                        ←
                    </button>
                    <button onClick={handleNext} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:border-none">
                        →
                    </button>
                </div>
            </div>
            <p className="2xl:text-[22px] text-[20px] max-md:text-[18px] font-medium text-gray-30">{props.text}</p>
        </div>
    )
}

export default RectangleAcademics

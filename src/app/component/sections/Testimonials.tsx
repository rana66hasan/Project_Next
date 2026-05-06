"use client"
import { card2, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card2 from "../ui/Card2"
import { useEffect, useState } from "react"

const data1: TopSection = {
    textButton: "Their Happy Words 🤗",
    head: "Our Testimonials",
    text: "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
}
const data2: Array<card2> = [
    {
        img: "/imges/Profile1.png",
        name: "Jennifer B",
        text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        img: "/imges/Profile2.png",
        name: "David K",
        text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        img: "/imges/Profile3.png",
        name: "Emily L",
        text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        img: "/imges/Profile1.png",
        name: "Rana",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illum quibusdam illo, tempore odio esse."
    },
    {
        img: "/imges/Profile1.png",
        name: "Rama",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illum quibusdam illo, tempore odio esse."
    },
    {
        img: "/imges/Profile1.png",
        name: "Batoul",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illum quibusdam illo, tempore odio esse."
    },
]
function Testimonials() {
    const [startIndex, setStartIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(3)
    const [ButtonSee, setButtonSee] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setCardsPerView(1)
                setButtonSee(true)
            } else if (window.innerWidth < 1440) {
                setCardsPerView(2)
                if (window.innerWidth > 1024) {
                    setButtonSee(false)
                }

            } else {
                setCardsPerView(3)
                if (window.innerWidth > 1024) {
                    setButtonSee(false)
                }
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const total = data2.length
    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % total)
    }
    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + total) % total)
    }
    // loop display
    const visibleCards = []
    for (let i = 0; i < cardsPerView; i++) {
        visibleCards.push(data2[(startIndex + i) % total])
    }
    return (
        <div id="testimonials" className="flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex items-center justify-center 2xl:gap-12.5 gap-10 max-md:flex-col">
                {!ButtonSee && <button onClick={handlePrev} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-65 hover:border-none">
                    ←
                </button>}
                <div className="flex  items-center justify-center 2xl:gap-12.5 gap-10">
                    {visibleCards.map((item, index) => (
                        <Card2 data={item} key={index} />
                    ))}
                </div>
                {!ButtonSee && <button onClick={handleNext} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-65 hover:border-none">
                    →
                </button>}

            </div>
            {ButtonSee && <div className="m-auto">
                <button onClick={handlePrev} className="border mr-10 px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-65 hover:border-none">
                    ←
                </button>
                <button onClick={handleNext} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-65 hover:border-none">
                    →
                </button>
            </div>}
        </div>
    )
}

export default Testimonials

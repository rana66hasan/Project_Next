'use client'

import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import { useEffect, useState } from "react"
import Card1 from "../ui/Card1"

const data1: TopSection = {
    textButton: "Our Achievements",
    head: "Our Awards and Recognitions",
    text: "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
}
const data2: Array<card1> = [
    {
        img: "/imges/iconAbout1.png",
        head: "Outstanding Early Childhood Education Awar",
        text: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
    },
    {
        img: "/imges/iconAbout2.png",
        head: "Innovative STEAM Education Award",
        text: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
    },
    {
        img: "/imges/iconAbout3.png",
        head: "Environmental Stewardship Award",
        text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
    },
    {
        img: "/imges/iconAbout1.png",
        head: "Nagham Environmental Stewardship Award",
        text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
    },
    {
        img: "/imges/iconAbout3.png",
        head: "Ammar Environmental Stewardship Award",
        text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
    },
    {
        img: "/imges/iconAbout3.png",
        head: "Rana Environmental Stewardship Award",
        text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
    },
]
function Awards() {
    const [startIndex, setStartIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(3)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setCardsPerView(1)
            } else if (window.innerWidth < 1440) {
                setCardsPerView(2)
            } else {
                setCardsPerView(3)
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
        <div id="AwardsID" className="flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5 2xl:px-27 lg:px-7.5">
            <HeaderSection data={data1} />
            <div className="flex items-center flex-col justify-center 2xl:gap-12.5 gap-10 max-md:flex-col">
                <div className="flex  items-between 2xl:justify-between justify-center 2xl:gap-10 gap-7.5 w-full">
                    {visibleCards.map((item, index) => (
                        <Card1 props={item} key={index} />
                    ))}
                </div>
                <div className="flex gap-5">
                    <button onClick={handlePrev} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-90 hover:border-none">
                        ←
                    </button>
                    <button onClick={handleNext} className="border px-3 py-2 rounded text-[30px] text-center bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-90 hover:border-none">
                        →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Awards

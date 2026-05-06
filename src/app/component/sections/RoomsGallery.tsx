'use client'
import { rectangleAcademics, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import RectangleAcademics from "../ui/RectangleAcademics"
import { useState } from "react"

const data1: TopSection = {
    textButton: "Our Gallery",
    text: "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
    head: "Our Rooms Gallery"
}
const data2: Array<rectangleAcademics> = [
    {
        img: [
            "/imges/imgHars11.png",
            "/imges/imgHars12.png",
            "/imges/imgHars13.png",
            "/imges/imgHars14.png"],
        head: "Classrooms",
        text: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
    },
    {
        img: ["/imges/imgHars21.png",
            "/imges/imgHars22.png",
            "/imges/imgHars23.png",
            "/imges/imgHars24.png"],
        head: "Library",
        text: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
    },
    {
        img: ["/imges/imgHars31.png",
            "/imges/imgHars32.png",
            "/imges/imgHars33.png",
            "/imges/imgHars34.png"],
        head: "Science Lab",
        text: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
    },
    {
        img: ["/imges/imgHars41.png",
            "/imges/imgHars42.png",
            "/imges/imgHars43.png",
            "/imges/imgHars44.png"],
        head: "Computer Lab",
        text: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
    },
    {
        img: ["/imges/imfGard51.png",
            "/imges/imfGard52.png",
            "/imges/imfGard53.png",
            "/imges/imfGard54.png"],
        head: "Garden and Nature Area",
        text: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
    }
]

function RoomsGallery() {
    const [select, setSelect] = useState("All")
    const data3: Array<string> = ["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"]
    const filter = select === "All" ? data2 : data2.filter((c) => c.head === select)

    return (
        <div id="RoomsGalleryId" className="2xl:px-27 flex flex-col 2xl:gap-40 gap-30 max-md:gap-20 ">
            <HeaderSection data={data1} />
            <div className="flex flex-col gap-50">
                <div className="flex gap-5 flex-nowrap justify-center max-[1050px]:justify-start overflow-x-auto pb-5 scroll-smooth pl-10">
                    {data3.map((Y) => (
                        <button
                            key={Y}
                            onClick={() => setSelect(Y)}
                            className={`border-2 border-gray-20 rounded-lg  min-w-fit py-3.5 px-5 transform transition duration-300 hover:scale-105 hover:-translate-x-2  ${select==Y?"bg-orange-95":"bg-white"}`}
                        >
                            {Y}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col 2xl:gap-75 gap-53 max-md:gap-48">
                    {
                        filter.map((item, index) => {
                            return (
                                <RectangleAcademics props={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RoomsGallery


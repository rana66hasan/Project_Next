import { rectangle, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import RectangleAbout from "../ui/RectangleAbout"

const data1: TopSection = {
    textButton: "Our Progressive Journey",
    head: "Our History",
    text: "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
}
const data2: Array<rectangle> = [
    {
        number: 2023,
        head: "Resilience and Future Horizons",
        text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
        number: 2017,
        head: "Innovation and Technology",
        text: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
    },
    {
        number: 2012,
        head: "Expansion and Recognition",
        text: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
    },
    {
        number: 2005,
        head: "Inception and Growth",
        text: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
    }
]
function History() {
    return (
        <div id="HistoryId" className="flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5 2xl:px-27 lg:px-7.5">
            <HeaderSection data={data1} />
            <div className="border-2 border-gray-15 rounded-xl bg-white shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:p-37.5 lg:p-25 flex flex-col 2xl:gap-25 lg:gap-20 max-lg:gap-25 max-lg:py-12.5 max-lg:pr-5 max-lg:ps-2.5 ">
                {
                    data2.map((item, index) => {
                        return (
                            <RectangleAbout props={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History


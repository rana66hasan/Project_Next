import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card4 from "../ui/Card4"

const data1: TopSection = {
    textButton: "Mission & Visions",
    head: "Our Mission & Visions",
    text: "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
}
const data2: Array<card1> = [
    {
        head: "Mission",
        text: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
        img: "/imges/section2Aboutimg1.png"
    },
    {
        text: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.Vision",
        head: "Vision",
        img: "/imges/section2Aboutimg2.png"
    }
]
function Mission() {
    return (
        <div id="MissionId" className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex 2xl:gap-15 lg:gap-10 gap-12.5 max-md:flex-col max-md:items-center">
                {
                    data2.map((item, index) => {
                        return (
                            <Card4 props={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mission

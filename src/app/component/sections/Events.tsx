import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card6 from "../ui/Card6"

const data1: TopSection = {
    textButton: "Our Features",
    head: "Events & Celebrations",
    text: "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
}
const data2: Array<card1> = [
    {
        img: "/imges/StudentImgCard1.png",
        text: "A day filled with friendly competition, team spirit, and sportsmanship.",
        head: "Annual Sports Day",
        horizontalTop: true
    },
    {
        img: "/imges/StudentImgCard2.png",
        text: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
        head: "Cultural Festivals",
        horizontalBottom: true
    },
    {
        img: "/imges/StudentImgCard3.png",
        text: "Showcasing our students' artistic talents through exhibitions and displays.",
        head: "Art Exhibitions",
        horizontalTop: true
    },
    {
        img: "/imges/StudentImgCard4.png",
        text: "A platform for budding scientists to present their innovative projects and experiments.",
        head: "Science Fair",
        horizontalTop: true
    },
    {
        img: "/imges/StudentImgCard5.png",
        text: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
        head: "International Day",
        horizontalBottom: true
    },
    {
        img: "/imges/StudentImgCard6.png",
        text: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
        head: "Graduation Ceremony",
        horizontalTop: true
    }
]
function Events() {
    return (
        <div className="2xl:px-27 flex flex-col 2xl:gap-40 gap-30 max-md:gap-20">
            <HeaderSection data={data1} />
            <div className="flex flex-wrap items-center xl:justify-between justify-center gap-10 ">
                {
                    data2.map((item, index) => {
                        return (
                            <Card6 props={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events

import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card6 from "../ui/Card6"

const data1: TopSection = {
    textButton: "Our Features",
    head: "What Students Learn",
    text: "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
}
const data2: Array<card1> = [
    {
        img: "/imges/ImageAcademics1.png",
        head: "Language Arts",
        text: "Reading, writing, storytelling, and communication skills."
    },
    {
        img: "/imges/ImageAcademics2.png",
        head: "Mathematics",
        text: "Number sense, basic operations, problem-solving, and logic.Science"
    },
    {
        img: "/imges/ImageAcademics3.png",
        head: "Science",
        text: "Exploring the natural world through hands-on experiments and investigations."
    },
    {
        img: "/imges/ImageAcademics4.png",
        head: "Social Studies",
        text: "Cultivating an understanding of diverse cultures and communities."
    },
    {
        img: "/imges/ImageAcademics5.png",
        head: "Arts and Crafts",
        text: "Encouraging creativity through various art forms and crafts."
    },
    {
        img: "/imges/ImageAcademics6.png",
        head: "Physical Education",
        text: "Promoting physical fitness, coordination, and teamwork."
    }
]
function StudentsLearn() {
    return (
        <div className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex flex-wrap 2xl:gap-12.5 gap-10 lg:justify-between justify-center ">
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

export default StudentsLearn

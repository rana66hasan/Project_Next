import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card1 from "../ui/Card1"

const data1: TopSection = {
    textButton: "Our Features",
    head: "Our Special Features",
    text: "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
}
const data2: Array<card1> = [
    {
        img: "/imges/imgAcademicsCars1.png",
        head: "Thematic Learning",
        text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
    },
    {
        img: "/imges/imgAcademicsCars2.png",
        head: "STEAM Education",
        text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
    },
    {
        img: "/imges/imgAcademicsCars3.png",
        head: "Language Immersion",
        text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
    },
    {
        img: "/imges/imgAcademicsCars4.png",
        head: "Art and Creativity",
        text: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
    },
    {
        img: "/imges/imgAcademicsCars5.png",
        head: "Outdoor Education",
        text: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
    },
    {
        img: "/imges/imgAcademicsCars6.png",
        head: "Play-Based Learning",
        text: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
    }
]

function Features() {
    return (
        <div id="FeaturesId" className="2xl:px-27 flex flex-col   2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex flex-wrap items-center xl:justify-between justify-center gap-10 ">
                {
                    data2.map((item, index) => {
                        return (
                            <Card1 props={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Features

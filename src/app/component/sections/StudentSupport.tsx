import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card1 from "../ui/Card1"

const data1: TopSection = {
    textButton: "Our Achievements",
    text: "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include",
    head: "Student Support"
}
const data2: Array<card1> = [
    {
        img: "/imges/iconStudentSection41.png",
        text: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
        head: "Counseling"
    },
    {
        img: "/imges/iconStudentSection42.png",
        text: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
        head: "Learning Support"
    },
    {
        img: "/imges/iconStudentSection43.png",
        text: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
        head: "Parent-Teacher Collaboration"
    }
]
function StudentSupport() {
    return (
        <div className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex flex-wrap items-center 2xl:justify-between justify-center gap-10 ">
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

export default StudentSupport

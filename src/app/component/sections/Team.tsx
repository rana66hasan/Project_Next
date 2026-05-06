import { card5, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card5 from "../ui/Card5"

const data1: TopSection = {
    textButton: "Our Teachers With Experties",
    head: "Our Team Members",
    text: "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
}
const data2: Array<card5> = [
    {
        img: "/imges/CardImg1About.png",
        head: "Ms. Sarah Anderson",
        head2: "Qualification:Bachelor's Degree in Early Childhood Education",
        text: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
    },
    {
        img: "/imges/CardImg2About.png",
        head: "Mr. David Roberts",
        head2: "Qualification: Master's Degree in Elementary Education",
        text: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
    },
    {
        img: "/imges/CardImg3About.png",
        head: "Ms. Emily Hernandez",
        head2: "Qualification: Diploma in Child Psychology",
        text: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
    },
    {
        img: "/imges/CardImg4About.png",
        head: "Mr. Michael Turner",
        head2: "Qualification: Bachelor's Degree in Physical Education",
        text: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
    },
    {
        img: "/imges/CardImg5About.png",
        head: "Ms. Jessica Lee",
        head2: "Qualification: Master's Degree in Special Education",
        text: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
    },
    {
        img: "/imges/CardImg6About.png",
        head: "Mr. William Parker",
        head2: "Qualification: Bachelor's Degree in Fine Arts",
        text: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
    },
]

function Team() {
    return (
        <div id="TeamId" className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex 2xl:gap-12.5 max-2xl:gap-10 flex-wrap justify-between max-lg:flex-col  max-lg:items-center">
                {
                    data2.map((item, index) => {
                        return (
                            <Card5 props={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Team

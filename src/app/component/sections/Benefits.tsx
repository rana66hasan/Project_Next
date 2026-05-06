import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card1 from "../ui/Card1"

const data1: TopSection = {
    textButton: "Children Deserve Bright Future",
    head: "Our Benefits",
    text: "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
}
const data2: Array<card1> = [
    {
        img: "/imges/iconCard1.png",
        head: "Holistic Learning Approach",
        text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
    },
    {
        img: "/imges/iconCard2.png",
        head: "Experienced Educators",
        text: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
    },
    {
        img: "/imges/iconCard3.png",
        head: "Nurturing Environment",
        text: "We prioritize safety and provide a warm and caring atmosphere for every child."
    },
    {
        img: "/imges/iconCard4.png",
        head: "Play-Based Learning",
        text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
    },
    {
        img: "/imges/iconCard5.png",
        head: "Individualized Attention",
        text: "Our small class sizes enable personalized attention, catering to each child's unique needs."
    },
    {
        img: "/imges/iconCard6.png",
        head: "Parent Involvement",
        text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
    }
]
function Benefits() {
    return (
        <div id="benfits" className="flex flex-col  2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex flex-wrap items-center xl:justify-between justify-center gap-10 ">{data2.map((item,index)=>{
                    return(
                        <Card1 props={item} key={index} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Benefits

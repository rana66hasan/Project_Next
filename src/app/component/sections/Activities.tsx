import { card1, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card1 from "../ui/Card1"

const data1:TopSection={
    text:"At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including",
    head:"Extracurricular Activities",
    textButton:"Our Features"
}
const data2:Array<card1>=[
    {
        img:"/imges/imgCardStudent1.png",
        head:"Sports and Athletics",
        text:"Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
    },
    {
        img:"/imges/imgCardStudent2.png",
        head:"Art and Creativity",
        text:"Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."
    },
    {
        img:"/imges/imgCardStudent3.png",
        head:"Music and Performing Arts",
        text:"Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."
    },
    {
        img:"/imges/imgCardStudent4.png",
        head:"Language Clubs",
        text:"Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
    },
    {
        img:"/imges/imgCardStudent5.png",
        head:"Science Club",
        text:"The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
    },
    {
        img:"/imges/imgCardStudent6.png",
        head:"Cooking and Culinary Arts",
        text:"Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals. "
    },
]
function Activities() {
    return (
        <div className="2xl:px-27 flex flex-col 2xl:gap-40 gap-30 max-md:gap-20">
            <HeaderSection data={data1}/>
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

export default Activities

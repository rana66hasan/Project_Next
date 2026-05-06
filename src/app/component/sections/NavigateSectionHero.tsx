import { TopSection ,card3 } from "../../interface"
import Card3 from "../ui/Card3"
import HeaderSection from "../ui/HeaderSection"

const data1:TopSection= {
    textButton:"Explore More",
    head:"Navigate through our Pages",
    text:"Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
}
const data2:Array<card3>=[
{
    head:"About Us",
    text:"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
},
{
    head:"Academics",
        text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
        head: "Student Life",
        text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
    {
        head: "Admissions",
        text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    }
]
function NavigateSectionHero() {
    return (
        <div className="flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1}/>
                <div className="flex 2xl:gap-12.5 gap-10 flex-wrap justify-center">
                {
                    data2.map((item , index)=>{
                        return (
                            <Card3 data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NavigateSectionHero

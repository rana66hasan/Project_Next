import Activities from "../component/sections/Activities"
import Events from "../component/sections/Events"
import HeroSection from "../component/sections/HeroSection"
import StudentSupport from "../component/sections/StudentSupport"
import { TopSection } from "../interface"

const data1:TopSection={
  textButton:"Enriching Student Life",
  head:"Embracing Learning with Discovery and Joy",
  text:"Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
}

function StudentLife() {
  return (
    <div className="max-2xl:px-7.5 max-md:px-0 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSection props={data1}/>
      <Activities/>
      <Events/>
      <StudentSupport/>
    </div>
  )
}

export default StudentLife

import AdmissionProcess from "../component/sections/AdmissionProcess"
import FeeStructure from "../component/sections/FeeStructure"
import HeroSection from "../component/sections/HeroSection"
import { TopSection } from "../interface"

const data1: TopSection = {
  textButton: "Admission",
  text: "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school",
  head: "Join Our Family of Young Learners"
}
function Admission() {
  return (
    <div className="max-2xl:px-7.5 max-md:px-0 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSection props={data1}/>
      <AdmissionProcess/>
      <FeeStructure/>
    </div>
  )
}

export default Admission

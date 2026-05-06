import Awards from "../component/sections/Awards"
import HeroSection from "../component/sections/HeroSection"
import History from "../component/sections/History"
import Mission from "../component/sections/Mission"
import Team from "../component/sections/Team"
import {  TopSection } from "../interface"

const data:TopSection={
  text:"A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.",
  head:"Welcome to Little Learners Academy",
  textButton:"Overview"
}

function About() {
  return (
    <div className="max-2xl:px-7.5 max-md:px-0 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSection props={data}/>
      <Mission/>
      <Awards/>
      <History/>
      <Team/>
    </div>
  )
}

export default About

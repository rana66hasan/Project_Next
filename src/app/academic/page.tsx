import Features from "../component/sections/Features"
import HeroSection from "../component/sections/HeroSection"
import RoomsGallery from "../component/sections/RoomsGallery"
import StudentsLearn from "../component/sections/StudentsLearn"
import { TopSection } from "../interface"

const data1:TopSection={
  textButton:"Academics",
  text:"Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
  head:"Nurturing Young Minds for Success"
}

function Academics() {
  return (
    <div className="max-2xl:px-7.5 max-md:px-0 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSection props={data1}/>
      <Features/>
      <StudentsLearn/>
      <RoomsGallery/>
    </div>
  )
}

export default Academics

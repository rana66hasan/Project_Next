import HeroSection from "../component/sections/HeroSection"
import StudentInformation from "../component/sections/StudentInformation"
import { TopSection } from "../interface"

const data1:TopSection={
  textButton:"Contact Us",
  text:"We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
  head:"Feel Free To Connect With Us",
  data:[
    {
      Img:"/imges/iconContact1.png",
      Text:"hello@littlelearners.com"
    },
    {
      Img:"/imges/iconContact2.png",
      Text:"+91 91813 23 2309"
    },
    {
      Img:"/imges/iconContact3.png",
      Text:"Somewhere in the World"
    },
    {
      Img:"/imges/iconContact4.png",
      Text:"Office Hours - 9am - 6 pm"
    }
  ]
}
function Contact() {
  return (
    <div className="max-2xl:px-7.5 max-md:px-0 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSection props={data1}/>
      <StudentInformation/>
    </div>
  )
}

export default Contact

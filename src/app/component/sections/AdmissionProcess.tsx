import { rectangle, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import Card7 from "../ui/Card7"

const data1: TopSection = {
    textButton: "Process",
    text: "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an ",
    head: "Admission Process"
}
const data2:Array<rectangle>=[
    {
        number:1,
        text:"Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academ.",
        head:"Inquiry"
    },
    {
        number:2,
        text:"Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
        head:"School Tour"
    },
    {
        number:3,
        text:"Complete the application form and provide the required documents, including your child's birth certificate, medical records, (if applicable).",
        head:"Application Form"
    },
    {
        number:4,
        text:"We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners",
        head:"Parent Interview"
    },
    {
        number:5,
        text:"For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
        head:"Student Assessment"
    },
    {
        number:6,
        text:"Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy ,family's expectations.",
        head:"Acceptance"
    }
]
function AdmissionProcess() {
    return (
        <div className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="flex 2xl:gap-y-25 gap-y-20 flex-wrap 2xl:gap-x-12.5 gap-x-10 max-md:gap-x-12.5 justify-between max-[100px]:justify-center items-center ">
                {
                    data2.map((item,index)=>{
                        return(
                            <Card7 props={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AdmissionProcess

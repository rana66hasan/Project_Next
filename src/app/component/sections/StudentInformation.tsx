import { inputContact, TopSection } from "@/app/interface"
import HeaderSection from "../ui/HeaderSection"
import InputContact from "../ui/InputContact"
import Image from "next/image"

const data1: TopSection = {
    textButton: "Contact Form",
    head: "Student Information",
    text: "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
}
const data2: Array<inputContact> = [
    {
        label: "Parent Name",
        placeholder: "Enter Parent Name",
        type: "text",
        typeElement: "input"
    }, {
        label: "Email Address",
        placeholder: "Enter Email Address",
        type: "email",
        typeElement: "input"

    }
    , {
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        type: "number",
        typeElement: "input"

    }, {
        label: "Student Name",
        placeholder: "Enter Student Name",
        type: "text",
        typeElement: "input"

    }, {
        label: "Student Age",
        placeholder: "Enter Student Age",
        type: "number",
        typeElement: "input"

    }, {
        label: "Program of Intrest",
        placeholder: "Select Program",
        select1: "Select1",
        select2: "Select2",
        select3: "Select3",
        typeElement: "input"

    }, {
        label: "Message",
        placeholder: "Enter your Message",
        typeElement: "textarea"

    }, {
        type: "submit"

    }
]
function StudentInformation() {
    return (
        <div id="StudentInformationId" className="flex flex-col  2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="px-20 pt-25 pb-20 border-2 border-gray-15 rounded-xl bg-white shadow-[6px_6px_0px_1px_#1E1E1E] max-2xl:px-7.5 max-2xl:pt-20 max-2xl:pb-7.5 relative transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-50">
                <div className="flex gap-2 absolute -top-7 w-full justify-center">
                    <a href="https://www.facebook.com" >
                        <div className="w-31 h-14 px-10 max-md:px-4 flex items-center  max-md:w-17 justify-center py-4 bg-orange-90 border-2 border-gray-15 rounded-lg  transform transition duration-300 hover:scale-105 hover:-translate-y-2 ">
                            <Image src="/imges/facebook.png" alt="imgContact" width={26} height={26} />
                        </div>
                    </a>
                    <a href="https://www.twitter.com">
                        <div className="w-31 h-14 px-10 py-4 max-md:px-4 flex items-center  max-md:w-17 justify-center bg-orange-90 border-2 border-gray-15 rounded-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 ">
                            <Image src="/imges/twiter.png" alt="imgContact" width={26} height={26} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com">
                        <div className="w-31 h-14 px-10 py-4 max-md:px-4 flex items-center  max-md:w-17 justify-center bg-orange-90 border-2 border-gray-15 rounded-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 ">
                            <Image src="/imges/linked.png" alt="imgContact" width={26} height={26} />
                        </div>
                    </a>
                </div>
                <form className="flex flex-wrap items-center xl:justify-between justify-center gap-10  max-[1226px]:flex-col">
                    {
                        data2.map((item, index) => {
                            return (
                                <InputContact props={item} key={index} />
                            )
                        })
                    }
                </form>
            </div>
        </div>
    )
}

export default StudentInformation

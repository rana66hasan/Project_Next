"use client"
import { useState } from "react"
import { FaqItemProps, TopSection } from "../../interface"
import FaqItem from "../ui/FaqItem"
import HeaderSection from "../ui/HeaderSection"

const data1: TopSection = {
    textButton: "Solutions For The Doubts",
    head: "Frequently Asked Questions",
    text: "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
}
const data2: Array<{ question: string, answer: string }> = [
    {
        question: "What are the school hours at Little Learners Academy?",
        answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question: "Is there a uniform policy for students?",
        answer: " answer this question Is there a uniform policy for students?"
    },
    {
        question: "What extracurricular activities are available for students?",
        answer: "answer this question What extracurricular activities are available for students?"
    },
    {
        question: "What extracurricular activities are available for students?",
        answer: "answer this question What extracurricular activities are available for students?"
    },
    {
        question: "How do you handle food allergies and dietary restrictions?",
        answer: "answer this question How do you handle food allergies and dietary restrictions?"
    },
    {
        question: "What is the teacher-to-student ratio at Little Learners Academy?",
        answer: "answer this question What is the teacher-to-student ratio at Little Learners Academy?"
    },
    {
        question: "How do you handle discipline and behavior management?",
        answer: "answer this question How do you handle discipline and behavior management?"
    },
    {
        question: "How do I apply for admission to Little Learners Academy?",
        answer: "answer this question How do I apply for admission to Little Learners Academy?"
    }
]
function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const handelTogle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div id="faq" className="2xl:px-27 flex flex-col 2xl:gap-25 gap-20 max-md:gap-12.5">
            <HeaderSection data={data1} />
            <div className="xl:grid grid-cols-2 2xl:gap-x-12.5 max-xl:gap-5 max-xl:flex max-xl:flex-col gap-x-10 2xl:gap-y-7.5 gap-y-6 ">
                {
                    data2.map((item, index) => {
                        return (
                            <FaqItem {...item} isOpen={openIndex === index} onToggle={() => { handelTogle(index) }} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FAQ

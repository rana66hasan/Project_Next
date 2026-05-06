import { FaqItemProps } from "@/app/interface"

function FaqItem( props :  FaqItemProps ) {
    return (
        <div className={`grid-span-1 2xl:gap-7.5  h-fit flex justify-between items-start rounded-xl  border-2 border-gray-15 ${props.isOpen ? "bg-white 2xl:p-10 py-8.5 px-7.5" : "bg-orange-95 2xl:py-8.5 2xl:px-10 py-6 px-7.5 "} transform transition duration-300 hover:scale-105 hover:-translate-y-2`}>
            <div className="flex flex-col 2xl:gap-6 gap-5 w-[90%]" >
                <p className="2xl:text-[22px] text-[18px]  text-gray-15 font-semibold">{props.question}</p>
                { props.isOpen && <div className="border-2 border-gray-15 w-full"></div>}
                {props.isOpen && <p className="2xl:text-[20px] text-[16px] text-gray-20 font-medium">{props.answer}</p>}
            </div>
            <button onClick={props.onToggle} className={`border-2 border-gray-15 text-[30px] w-10 h-10  text-center rounded-md ${props.isOpen ? "bg-orange-95" : "bg-white"}`}>{props.isOpen ? "-" : "+"}</button>
        </div>
    )
}

export default FaqItem

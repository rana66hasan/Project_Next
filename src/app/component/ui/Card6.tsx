import { card1 } from '@/app/interface'
import Image from 'next/image'
import React from 'react'

function Card6({ props }: { props: card1 } ) {
    return (
        <div className='relative flex flex-col items-center text-center justify-center border-2 border-gray-15 rounded-xl  bg-white shadow-[6px_6px_0px_2px_#1E1E1E] 2xl:gap-12.5 gap-10 2xl:p-12.5 p-10 max-md:p-7.5 2xl:w-125 w-100 transform transition duration-300 hover:scale-105 hover:-translate-y-2'>
            {props.horizontalTop && <div className=' absolute z-0 top-30  w-full 2xl:h-31 h-25  border-2 border-gray-15 bg-orange-95'></div>}
            {props.horizontalBottom && <div className=' absolute z-0 top-50 max-2xl:top-30  w-full 2xl:h-31 h-25  border-2 border-gray-15 bg-orange-95'></div>}
            {(!props.horizontalTop && !props.horizontalBottom) && <div className=' absolute z-0 top-0  2xl:h-95 h-70 2xl:w-31 w-25 border-t-0 border-2 border-gray-15 bg-orange-95 rounded-b-xl'></div>}
            <div className='relative z-9'>
                <Image
                    src={props.img}
                    alt="imgAcademics"
                    width={300}
                    height={300}
                    className='w-full 2xl:h-75 h-55'
                />
            </div>
            <div className='flex flex-col items-center text-center justify-center 2xl:gap-5 gap-3.5'>
                <h4 className='2xl:text-[28px] text-[24px] text-gray-10 font-bold '>{props.head}</h4>
                <p className='2xl:text-[20px] text-[16px] text-gray-30 font-medium '>{props.text}</p>
            </div>
        </div>
    )
}

export default Card6

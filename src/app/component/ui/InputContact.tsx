import { inputContact } from '@/app/interface'
import React from 'react'

function InputContact({ props }: { props: inputContact }) {
  return (
    <div className={`${(props.type==="submit" || props.typeElement==="textarea")?"flex-[0_0_100%]  " :"flex-[0_0_48%] "} flex-col flex gap-3.5 max-[1226px]:w-full transform transition duration-300 hover:scale-105 hover:-translate-y-2 ` }>
      <label className="text-[20px] text-gray-30 font-semibold">{props.label}</label>
      {
        (props.typeElement === "input" && !props.select1)
          ?
          <input type='text' placeholder={props.placeholder} className='p-6 border-2 border-gray-15 bg-orange-97 rounded-md'/>
          :
          (props.typeElement === "textarea") ?
            <textarea placeholder={props.placeholder} className='p-6 border-2 border-gray-15 bg-orange-97 rounded-md h-40'></textarea>
            :
            (props.typeElement === "input" && props.select1)
            ?
            <select className='p-6 border-2 border-gray-15 bg-orange-97 rounded-md'>
              <option>{props.placeholder}</option>
              <option>{props.select1}</option>
              <option >{props.select2}</option>
              <option >{props.select3}</option>
            </select>
            :
            <button type='submit' className='bg-orange-75 p7.5 border-2 border-gray-15 h-24 rounded-md'>Submit</button>
      }
    </div>
  )
}

export default InputContact

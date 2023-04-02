"use client";

import Image from "next/image"
import { useState , useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import {motion} from 'framer-motion'

const MyItem = (props:any) => {
  const [onDesc , setOnDesc] = useState(false);
  const func = useEffect(
    () => {
      console.log(onDesc)
    },
    [onDesc]
  )

  return (
    
    <div>
      <div className="flex glass rounded-2xl p-3  items-center cursor-pointer"
    onClick={() => setOnDesc(!onDesc)}  
    
    >
      <Image src={props.item.img} alt={`Image of ${props.item.name}`} className="h-[50px] w-[50px] rounded-xl"/>
      <div className="flex flex-col">
        <h1 className={`text-white font-bold px-5 `}>{props.item.name}</h1>   
      </div>
      
      
    </div>
    <div className={` z-10 fixed justify-center items-center flex right-0 top-0 bottom-0 left-0 bg-[#07062957] ${onDesc ? '':'hidden'}  `}>
      <div
       className="glass flex rounded-2xl sm:mx-10 flex-col"
       
       
       >
       
        <div className="flex  justify-between  w-full gap-5 p-3">
        <Image src={props.item.img} alt={`Image of ${props.item.name}`} className="h-[50px] w-[50px] rounded-xl"/>
          <h1 className={`text-white font-bold`}>{props.item.name}</h1>   
          <AiOutlineCloseCircle className="flex text-white h-8 w-8 cursor-pointer" onClick={()=>setOnDesc(!onDesc)}/>
          
        </div>
        <div>
          <p className="text-white w-[300px] sm:w-[40em] px-5 py-5">
            {props.item.desc}
          </p>
        </div>
        

      </div>

    </div>

    </div>
  )
}

export default MyItem

//<p className="text-white font-mono">{props.item.desc}</p>
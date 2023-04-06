import React from 'react'
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Tip = (props:any) => {
  return (
    <div className='bg-gray-800 rounded-2xl p-2 mx-3 flex  justify-center items-center opacity-50'>
      <BsFillBookmarkStarFill className='h-5 w-5 text-white mr-2' />
      <p className='text-white flex'>{props.text}</p>
    </div>
  )
}

export default Tip
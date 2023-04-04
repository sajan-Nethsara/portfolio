"use client"
import Link from "next/link"
import { BiGridAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai"
import {useState} from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="w-full h-20 bg-opacity-10 text-white flex justify-between items-center">
      <div>
        <h1 className="text-[2em] ml-8">Hi</h1>
      </div>
      <div className="sm:flex gap-8 mr-8 hidden ">
        <Link href="/" className="flex font-mono hover:font-bold">
          <p>Home</p>
        </Link>
        <Link href="/contact" className="flex font-mono hover:font-bold">
          <p>Contact</p>
        </Link>
        <Link href="/about" className="flex font-mono hover:font-bold">
          <p>About</p>
        </Link>
      </div>
      <div className="flex sm:hidden">
        <BiGridAlt className={` ${isOpen ? "hidden" : "flex"} h-10 w-10 mr-4 opacity-80`} onClick={toggle} />
        <AiOutlineCloseCircle className={`h-10 w-10 mr-4 opacity-80 ${isOpen ? "flex" : "hidden"}`} onClick={toggle} />
        <div className={`${isOpen ? "flex" : "hidden"} absolute flex-col top-20 right-10 left-10 z-10 gap-1  `}>
          <Link href="/" className="flex font-mono hover:font-bold ml-5 py-3 px-3 text-white glass rounded-2xl justify-end">
            <p>Home</p>
          </Link>
          <Link href="/contact" className="flex font-mono hover:font-bold ml-5 py-3 px-3 text-white glass rounded-2xl justify-end">
            <p>Contact</p>
          </Link>
          <Link href="/about" className="flex font-mono hover:font-bold ml-5 py-3 px-3 text-white glass rounded-2xl justify-end">
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar
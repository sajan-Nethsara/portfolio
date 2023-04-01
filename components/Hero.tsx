'use client'
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from '../public/hero.jpg'

const Hero = () => {
  return (
    <div className="flex h-[100vh] w-full justify-evenly   items-center ">
     <div className="h-30 w-30 p-10 text-white glass rounded-2xl"> 
       <h1>Hello</h1> 
       <p className=" w-[300px] h-30 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis, dignissimos optio pariatur similique vero tempore quibusdam. Repellendus voluptate veritatis voluptas deserunt ab illo ipsum animi, sunt expedita excepturi nam!</p>    
     </div>
    </div>
  );
};

export default Hero;

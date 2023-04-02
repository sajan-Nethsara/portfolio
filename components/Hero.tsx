
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from '../public/hero.jpg'

const Hero = () => {
  return (
    <div className="flex  justify-evenly   items-center ">
     <div className=" sm:p-4 sm:m-4 p-4 m-2 flex text-white glass rounded-2xl items-center sm:flex-row flex-col"> 
       <Image src={heroImg} className="sm:h-[150px] h-[80px] sm:w-[150px] w-[80px] rounded-full proPic mx-4" alt="hero" /> 
       <div className="flex flex-col">
       <p className=" w-[300px] sm:w-[500px] h-30 text-[1em] sm:text-[1.3em]"> <span className="text-[1.1em]">"</span> Hi, Iam 'Sajan Nethsara' and Iam a web developer who is dedicated to continuouosly learning new things to become more professional..<span className="text-[1.1em]">"</span></p>    
       <Link href='/contact' className="flex font-mono self-end">
          <p className="flex hover:font-bold p-1">Contact..</p>
        </Link>
       </div>
     </div>
    </div>
  );
};

export default Hero;

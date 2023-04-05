"use client";

import { motion } from "framer-motion";


const MyText = () => {
  const bringing = ["b", "r", "i", "n", "g", "i", "n", "g"];
  const creativity = ["C", "R", "E", "A", "T", "I", "V", "I", "T", "Y"];
  const intotheweb = [
    "i",
    "n",
    "t",
    "o",
    " ",
    "t",
    "h",
    "e",
    " ",
    "w",
    "e",
    "b",
  ];

  const varients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.6,
    },
    hover:{
      scale:1.8,
      opacity:1,
      rotate:'-10deg',
      color:'#facc15',
      transition:{
        duration:0.1
      }
    },

    
  }



  return (
    <div className="w-full h-[100vh] justify-center items-center flex relative bottom-[5em]">
      
      <div className="  gap-4 sm:flex hidden xl:text-[4.5em] lg:text-[3.5em] md:text-[2.7em] text-[2.2em] items-center mx-5 px-5 relative">
        <div id="binging" className="flex">
          {bringing.map((x, index) => {
            return (
              <motion.span variants={varients} initial={varients.hidden} animate={varients.visible} whileHover={varients.hover}   className="text-white font-bold flex cursor-pointer py-80 " key={index}>
                {x}
              </motion.span>
            );
          })}
        </div>
        <div id="creativity" className="flex text-[1.2em]  px-2 items-center">
          {creativity.map((x, index) => {
            return (
              <motion.span variants={varients} initial={varients.hidden} animate={varients.visible} whileHover={varients.hover}  className="text-white font-bold flex cursor-pointer py-80 " key={index}>
                {x}
              </motion.span>
            );
          })}
        </div>
        <div id="intotheweb" className="flex">
          {intotheweb.map((x, index) => {
            if (x == " ") {
              return <span className="flex h-3 w-3 " key={index}></span>;
            } else {
              return (
                <motion.span variants={varients} initial={varients.hidden} animate={varients.visible} whileHover={varients.hover} 
                  className="text-white font-bold py-80 cursor-pointer"
                  key={index}
                >{x}</motion.span>
              );
            }
          })}
        </div>
      </div>

      <div className="flex sm:hidden flex-col justify-center items-center text-white font-bold text-[3em] ">
        <h2>bringing</h2>
        <h1 className="glass rounded-xl px-3 my-1">CREATIVITY</h1>
        <h2>into the web</h2>
        <p className=" font-normal text-[0.3em] opacity-40">use Desktop for better experience</p>
      </div>
    </div>
  );
};

export default MyText;

//bringing creativity in to the web

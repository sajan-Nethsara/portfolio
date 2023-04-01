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
      opacity: 1,
    },
    hover:{
      scale:1.5,
      rotate:'-10deg',
      color:'#4ade80',
      transition:{
        duration:0.1
      }
    },
    hover2:{
      scale:1.5,
      rotate:'-10deg',
      color:'black',
      transition:{
        duration:0.1
      }
    }

    
  }

  return (
    <div className="w-full h-[80vh] justify-center items-center flex relative">
      <div className="flex gap-4 sm:flex hidden text-[3em] mx-5 px-5 relativ">
        <div id="binging" className="flex">
          {bringing.map((x, index) => {
            return (
              <motion.span variants={varients} initial={varients.hidden} animate={varients.visible} whileHover={varients.hover}   className="text-white font-bold flex cursor-pointer py-3 " key={index}>
                {x}
              </motion.span>
            );
          })}
        </div>
        <div id="creativity" className="flex bg-green-400  rounded-2xl px-2 items-center">
          {creativity.map((x, index) => {
            return (
              <motion.span variants={varients} initial={varients.hidden} animate={varients.visible} whileHover={varients.hover2}  className="text-white font-bold flex cursor-pointer " key={index}>
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
                  className="text-white font-bold  cursor-pointer"
                  key={index}
                >{x}</motion.span>
              );
            }
          })}
        </div>
      </div>

      <div className="flex sm:hidden flex flex-col justify-center items-center text-white font-bold text-[3em] ">
        <h2>bringing</h2>
        <h1 className="bg-green-400 bg-opacity-60 px-3 my-1">CREATIVITY</h1>
        <h2>into the web</h2>
        <p className=" font-normal text-[0.3em] opacity-40">use Desktop for better experiens</p>
      </div>
    </div>
  );
};

export default MyText;

//bringing creativity in to the web

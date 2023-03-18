import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping"></div>
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 "></div>
      <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52 animate-ping"></div>
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[750px] w-[750px] mt-52 animate-pulse"></div>
      <div className="absolute rounded-full border border-[#333333] opacity-20 h-[900px] w-[900px] mt-52 animate-pulse"></div>
    </motion.div>
  );
};

export default BackgroundCircles;

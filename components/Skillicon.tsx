import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  url: string;
  percent?: string;
  grad?: string;
};

const Skillicon = ({ directionLeft, url, percent, grad }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -120 : 120,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={url}
        className=" rounded-full border  md:border-none border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className=" absolute opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className=" items-center flex justify-center h-full">
          {grad ? (
            <p className=" text-3xl font-bold text-black opacity-100">{grad}</p>
          ) : (
            <p className=" text-3xl font-bold text-black opacity-100">
              {percent}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skillicon;

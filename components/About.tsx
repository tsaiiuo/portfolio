import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://i.ibb.co/VJ9KZ80/avater.jpg"
        className=" -mb-24 md:mb-0 flex-shrink-0 w-44 h-44  rounded-full object-cover md:rounded-lg  md:w-64 md:h-95 lg:w-[400px] lg:h-[400px]"
      />
      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">蔡旻桓 Ian Tsai</h4>
        <h3 className=" text-2xl font-semibold">MS NCKU EE </h3>
        <h3 className=" text-2xl font-semibold">BS NCCU MIS </h3>

        <p className=" text-base">
          對程式語言抱持熱情也能理性的溝通和分析問題。除此之外，得利於樂天的個性，在團隊中我也時常擔任緩和劑的角色。本身較擅長軟體工程與企劃構想
          另外對新創產業和金融科技有極大的熱情
        </p>
      </div>
    </motion.div>
  );
};

export default About;

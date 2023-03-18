import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <Link href="https://github.com/tsaiiuo">
        <img
          className=" h-44 w-44 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
      </Link>
    </motion.div>
  );
};

export default Projects;

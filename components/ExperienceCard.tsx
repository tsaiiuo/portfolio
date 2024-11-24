import React from "react";
import { motion } from "framer-motion";
type Props = {
  img: string;
  title: string;
  company: string;
  skills: string[];
  date: string[];
  summary: string[];
};

const ExperienceCard = ({
  img,
  title,
  company,
  skills,
  date,
  summary,
}: Props) => {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] h-[600px] md:w-[500px] xl:w-[900px] bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  object-center object-contain"
        src={img}
      />
      <div className=" px-0 md:px-10">
        <h4 className=" text-2xl font-light">{title}</h4>
        <p className=" font-bold text-xl mt-1">{company}</p>
        <div className=" flex space-x-2 my-2">
          {skills.map((skill, i) => (
            <img key={i} className=" w-9 h-9" src={skill} />
          ))}
        </div>
        <p className=" uppercase py-2 text-gray-300">
          Started work{date[0]} - {date[1]} Ended
        </p>
        <ul className=" list-disc space-y-2 ml-5 text-lg">
          {summary.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

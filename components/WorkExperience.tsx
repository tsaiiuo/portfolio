import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = (props: Props) => {
  const skills = {
    vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    react:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    next: "https://miro.medium.com/max/1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    javascript:
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    java: "https://dev.java/assets/images/java-logo-vert-blk.png",
    python:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    tailwind:
      "https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg",
    mysql:
      "https://i0.wp.com/gordon168.tw/wp-content/uploads/2021/06/mysql-logo.png?fit=600%2C600&ssl=1",
    firebase:
      "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png",
    css: "https://www.iconninja.com/files/752/618/436/css-internet-technology-website-web-style-css3-icon.svg",
    toiec: "https://www.ukus.tw/images/toeic_263px_v1.png",
    meow: "https://cdn.bella.tw/index_image/SIXlRaTmfMy5HlCHixB9BrxUUJEO0RsHCitEVCpV.jpeg",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 mt-40 lg:mt-72 ">
        <ExperienceCard
          img="https://static.104.com.tw/b_profile/cust_picture/5283/130000000145283/logo.png?v=20220619233532"
          title="Software Engineer Intern"
          company="DotDot Global"
          date={["2022-06", "2023-01"]}
          skills={[
            skills.vue,
            skills.react,
            skills.mysql,
            skills.firebase,
            skills.javascript,
          ]}
          summary={["驗收金流模組", "獨自負責3件專案，並"]}
        />
        <ExperienceCard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          title="政大黑客松第二名"
          company="Google,Appworks,政治大學"
          date={["2022-05"]}
          skills={[
            skills.python,
            skills.react,
            skills.firebase,
            skills.javascript,
          ]}
          summary={["123", "123"]}
        />
        <ExperienceCard
          img="https://upload.wikimedia.org/wikipedia/zh/thumb/3/33/National_Chengchi_University_logo.svg/1200px-National_Chengchi_University_logo.svg.png"
          title="政大創客之心第一名（卓越獎)"
          company="政治大學育成中心"
          date={["2022-05"]}
          skills={[]}
          summary={["123", "123"]}
        />
      </div>
    </motion.div>
  );
};
export default WorkExperience;

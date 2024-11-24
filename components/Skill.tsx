import React from "react";
import { motion } from "framer-motion";
import Skillicon from "./Skillicon";
type Props = {};

const Skill = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-;eft xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skill
      </h3>

      <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profienciency
      </h3>

      <div className=" grid grid-cols-4 xl:grid-cols-6 gap-5">
        <Skillicon url="https://reactjs.org/logo-og.png" percent="55" />
        <Skillicon
          url="https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
          percent="76"
        />
        <Skillicon
          url="https://miro.medium.com/max/1000/1*KDMx1YspSrBcFJG-NDZgDg.png"
          percent="66"
        />
        <Skillicon
          url="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          percent="76"
        />
        <Skillicon
          url="https://dev.java/assets/images/java-logo-vert-blk.png"
          percent="70"
        />
        <Skillicon
          url="data:image/png;base64,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"
          percent="44"
        />
        <Skillicon
          url="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
          percent="55"
        />
        <Skillicon
          url="https://i0.wp.com/gordon168.tw/wp-content/uploads/2021/06/mysql-logo.png?fit=600%2C600&ssl=1"
          percent="80"
        />
        <Skillicon
          url="https://css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png"
          percent="80"
        />
        <Skillicon
          url="https://www.iconninja.com/files/752/618/436/css-internet-technology-website-web-style-css3-icon.svg"
          percent="47"
        />
        <Skillicon
          url="https://www.ukus.tw/public/images/toeic_263px_v1.png"
          grad="880"
        />
        <Skillicon
          url="https://cdn.bella.tw/index_image/SIXlRaTmfMy5HlCHixB9BrxUUJEO0RsHCitEVCpV.jpeg"
          grad="meow"
        />
      </div>
    </motion.div>
  );
};
export default Skill;

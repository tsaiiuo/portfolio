import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      <Head>
        <title>Iuo's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className=" ">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className=" ">
        <Skill />
      </section>
      {/* Projects */}
      <section id="projects" className="">
        <Projects />
      </section>
    </div>
  );
};

export default Home;

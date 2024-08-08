import React from "react";
import { Button, Label } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  SiGo,
  SiKubernetes,
  SiElixir,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiTerraform,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGraphql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const stacks = [
  { Icon: SiReact },
  { Icon: FaVuejs },
  { Icon: FaHtml5 },
  { Icon: IoLogoCss3 },
  { Icon: IoLogoJavascript },
  { Icon: SiPostgresql },
  { Icon: SiMysql },
  { Icon: SiPython },
  { Icon: FaJava },
  { Icon: SiFastapi },
  { Icon: FaDocker },
  { Icon: SiAmazonaws },
  // Add other icons here as needed
];

const AboutMePage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const goToNewPage = () => {
    navigate("/projects");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-gray-100 origin-left"
        style={{ scaleX }}
      />
      <div className="w-full max-w-3xl mx-auto mb-24">
        <motion.div>
          <Label>
            <h1 className="text-5xl font-extrabold text-gray-600 dark:text-gray-100 mb-8">
              Hello, I'm Melvin! 👋
            </h1>
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-12">
              <p className="mb-6">
                I'm a Penultimate Year Business Analytics undergraduate with a
                second major in Statistics at the National University of
                Singapore (NUS), specialising in Machine Learning-based
                Analytics. I have a deep interest in leveraging technology to
                solve real-world problems and make a positive impact.
              </p>
              <p className="mb-6">
                My passion for technology extends to web development and cloud
                computing, where I enjoy building and deploying applications
                that are both innovative and efficient.
              </p>
              <p className="mb-6">
                In my free time, I love staying active and challenging myself
                with runs. I also enjoy travelling, exploring new places and
                immersing myself in different cultures around the world.
              </p>
            </div>
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-12">
              <h1 className="text-5xl font-extrabold text-gray-600 dark:text-gray-100 mb-8">
                My Tech Stack 💻
              </h1>
              <br />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-4 justify-items-center">
                {stacks.map(({ Icon }, index) => (
                  <div
                    key={index}
                    className="text-4xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  color="dark"
                  size="lg"
                  className="flex items-center"
                  onClick={goToNewPage}
                  pill
                >
                  View Projects <HiOutlineArrowRight className="ml-2 mt-1" />
                </Button>
              </motion.div>
            </div>
          </Label>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMePage;

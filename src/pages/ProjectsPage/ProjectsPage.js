import React from "react";
import { Card, Badge } from "flowbite-react";
import personalwebsite from "../../assets/personalwebsite.png";
import AIAssessor from "../../assets/AIAssessor.png";
import NOCIntern from "../../assets/NOCIntern.png";
import RecommendChill from "../../assets/RecommendChill.png";
import Pecunia from "../../assets/pecunia.png";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";

const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left"
        style={{ scaleX }}
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-600 dark:text-white mb-8">
        Project Involvements 🗂️
      </h1>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-xs sm:max-w-sm flex flex-col items-center">
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={personalwebsite}
                alt="Personal Website"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Website
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                A personal website showcasing my projects and contact
                information. This static website is hosted on AWS Cloud using an
                S3 bucket for storage and Route 53 for domain name management.
              </p>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  React
                </Badge>
                <Badge color="dark" size="sm">
                  TailwindCSS
                </Badge>
                <Badge color="dark" size="sm">
                  AWS
                </Badge>
              </div>
              <a
                href="https://github.com/meljwang/my-personal-website"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaGithub className="text-2xl text-gray-900 dark:text-white" />
              </a>
            </div>
          </Card>
          <Card className="max-w-xs sm:max-w-sm flex flex-col items-center">
            <br></br>
            <br></br>
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={AIAssessor}
                alt="AI Assessor"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI Assessor
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                This examination portal application utilises large language
                models (LLMs) to evaluate student responses, automatically
                assigning marks based on the correctness and precision of their
                answers.
              </p>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  React
                </Badge>

                <Badge color="dark" size="sm">
                  PostgreSQL
                </Badge>
                <Badge color="dark" size="sm">
                  AWS
                </Badge>
              </div>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  LangChain
                </Badge>
                <Badge color="dark" size="sm">
                  Python
                </Badge>
                <Badge color="dark" size="sm">
                  FastAPI
                </Badge>
              </div>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  TailwindCSS
                </Badge>
              </div>
              <a
                href="https://github.com/meljwang/assessorproject"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaGithub className="text-2xl text-gray-900 dark:text-white" />
              </a>
            </div>
          </Card>
        </div>
      </motion.div>

      <motion.div
        className="card-container mt-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-xs sm:max-w-sm flex flex-col items-center">
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={NOCIntern}
                alt="NOCIntern"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                NOCIntern
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                The NOCIntern website is an NOC-themed internship portal
                designed to streamline the process of connecting students with
                internship opportunities from around the world.
              </p>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  Vue
                </Badge>
                <Badge color="dark" size="sm">
                  HTML/CSS
                </Badge>
                <Badge color="dark" size="sm">
                  Firebase
                </Badge>
              </div>
              <a
                href="https://github.com/BT3103AppDev1/l1-final-term-project-team-11-nocintern"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaGithub className="text-2xl text-gray-900 dark:text-white" />
              </a>
            </div>
          </Card>
          <Card className="max-w-xs sm:max-w-sm flex flex-col items-center">
            <br></br>
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={RecommendChill}
                alt="RecommendChill"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Recommend & Chill
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                A movie recommendation system designed to suggest films based on
                user preferences and viewing history by analysing patterns in
                user behavior and movie attributes. Involved the implementation
                of collaborative filtering and content-based filtering
                techniques.
              </p>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  Python
                </Badge>
                <Badge color="dark" size="sm">
                  SQL
                </Badge>
              </div>
              <a
                href="https://github.com/meljwang/BT4222-Recommendation-System-Group-10-Recommend-and-Chill"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaGithub className="text-2xl text-gray-900 dark:text-white" />
              </a>
            </div>
          </Card>
        </div>
      </motion.div>

      <motion.div
        className="card-container mt-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-xs sm:max-w-sm flex flex-col items-center">
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Pecunia}
                alt="Pecunia"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pecunia
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Mobile app designed to help users manage their finances
                efficiently. It allows users to track their expenses, create and
                monitor budgets, and set financial goals.
              </p>
              <div className="flex space-x-2 mt-2">
                <Badge color="dark" size="sm">
                  Flutter
                </Badge>
                <Badge color="dark" size="sm">
                  Firebase
                </Badge>
              </div>
              <a
                href="https://github.com/meljwang/Pecuina"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaGithub className="text-2xl text-gray-900 dark:text-white" />
              </a>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;

import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "../portfolio.js";
import profilePicture from "../../assets/profilepicture.png";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Footnote from "../../components/Footnote.js";
import { motion } from "framer-motion";

const MainPage = () => {
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/aboutme");
  };

  return (
    <div className="intro_sec flex flex-col items-center justify-center min-h-screen">
      <div className="text h-full flex flex-col items-center justify-center text-center">
        <div className="intro mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full overflow-hidden w-56 h-56">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Melvin Ang
          </h1>
          <div className="text-3xl font-semibold text-gray-700 mb-6">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </div>
          <p className="mt-6 text-2xl text-gray-600">{introdata.description}</p>
          <div className="flex justify-center mt-6">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button color="dark" pill size="lg" onClick={gotToNewPage}>
                More About Me <HiOutlineArrowRight className="ml-2 mt-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footnote />
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "../portfolio.js";
import profilePicture from "../../assets/profilepicture.png";

const MainPage = () => {
  return (
    <div className="intro_sec flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text h-full flex flex-col items-center justify-center text-center">
        <div className="intro mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
            Melvin Ang
          </h1>
          <div className="text-4xl font-semibold text-gray-700 mb-8">
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
          <p className="mt-8 text-3xl text-gray-600">{introdata.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

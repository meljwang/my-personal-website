import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainPage from "../pages/MainPage/MainPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import NavBar from "../components/NavBar";
import ContactMe from "../pages/ContactPage/ContactPage";

const AppRouter = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      {" "}
      {/* Adjust this value based on your navbar height */}
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <MainPage />
              </motion.div>
            }
          />
          <Route
            path="/home"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <MainPage />
              </motion.div>
            }
          />
          <Route
            path="/aboutme"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <AboutMePage />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <ProjectsPage />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <ContactMe />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppRouter;

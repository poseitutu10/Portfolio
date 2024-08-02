import React, { useContext } from "react";
import { AllOverContext } from "../../utils/OverallContext";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Themer from "../Home/Themer";
import ProjectDetails from "./ProjectDetails";

const Project = () => {
  const { isDark } = useContext(AllOverContext);
  return (
    <>
      <div
        className={`main relative w-full ${
          isDark ? "bg-[#313131] text-white" : "bg-white text-black"
        } m-auto`}
      >
        <Header isDark={isDark} />
        <Themer />
        <ProjectDetails />
        <Footer />
      </div>
    </>
  );
};

export default Project;

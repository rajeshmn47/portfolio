import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./AllSkills/Skills";
import ContactUs from "./ContactUs/ContactUs";
import projectData from "../AllProjects/projectsData.json";
import WorkFeatured from "../Shared/WorkFeatured/WorkFeatured";

const Home = () => {
  document.title = "Welcome to Rajesh's Portfolio";
  const projects = projectData.slice(0, 6);
  return (
    <div>
  <HeaderMain/>
  <AboutMe/>
      <WorkFeatured projectData={projects}/>
      <ContactUs/>
    </div>
  );
};

export default Home;

import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./AllSkills/Skills";
import ContactUs from "./ContactUs/ContactUs";
import projectData from "../AllProjects/projectsData.json";
import WorkFeatured from "../Shared/WorkFeatured/WorkFeatured";
import styled from "@emotion/styled";
const Home = () => {
  document.title = "Welcome to Rajesh's Portfolio";
  const projects = projectData.slice(0, 6);
  return (
    <Container>
      <HeaderMain />
      <AboutMe />
      <WorkFeatured projectData={projects} />
      <Skills />
      <ContactUs />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    .skills {
      display: none;
    }
    overflow: hidden;
  }
`;

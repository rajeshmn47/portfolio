import React from "react";
import "./AboutMe.css";
import aboutUs from "../../images/about-us.png";
import { Container, Row, Col } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import TypeAnimation from "react-type-animation";
import myResume from "./resume/resume.pdf";
import DownloadIcon from "@material-ui/icons/GitHub";
import styled from "@emotion/styled";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="pt-lg-5 mt-5 pb-5 aboutMe_container">
      <Container fluid className="px-lg-5 pt-5">
        <Slide bottom>
          <Row className="px-lg-5">
            <Col sm={12} md={12} lg={6} xl={6} className="p-md-5 p-lg-2">
              <img src={aboutUs} alt="" className="img-fluid p-md-5 p-lg-2" />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="aboutContent">
              <div className="pt-lg-3 pt-xl-5">
                <h1 className="pb-3 all_title_section">
                  LET ME INTRODUCE MYSELF
                </h1>
                <p className="px-md-5 px-lg-0">
                  I'm a passionate and result-driven <strong> Full Stack Web Developer </strong>
                  with over <strong> three and a half years of experience </strong> in designing and
                  deploying <strong> responsive, scalable, and dynamic web applications</strong>.
                  I specialize in <strong> React.js, Node.js, Express.js, MongoDB, MySQL </strong>,
                  and modern JavaScript frameworks.
                </p>

                <p className="pt-2 px-md-5 px-lg-0">
                  Based in <strong> Bangalore, India </strong>, I have a strong grasp of
                  <strong> REST APIs, Database Management, Authentication, Deployment, </strong>
                  and <strong> Version Control (Git/GitHub) </strong>.
                  I take pride in writing <strong> clean, maintainable, and scalable code </strong>
                  to deliver seamless user experiences.
                </p>

                <p className="pt-2 px-md-5 px-lg-0">
                  I'm highly skilled in deploying applications on platforms like
                  <strong> Vercel, Hostinger, Heroku, and GitHub Pages </strong>.
                  My problem-solving mindset and continuous learning drive me to deliver
                  <strong> high-quality web applications </strong> that exceed client expectations.
                </p>

                <p className="pt-2 px-md-5 px-lg-0">
                  I'm currently open to <strong> exciting opportunities </strong> where I can
                  contribute my skills to build impactful web solutions.
                  Feel free to <strong> check out my resume </strong> or connect for job opportunities,
                  freelance work, or collaborations.
                </p>

                <ResumeLink
                  href={myResume}
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  className="d-flex justify-content-md-center justify-content-lg-start"
                >
                  <button className="button hire_btn mt-3 text-uppercase py-3">
                    <DownloadIcon style={{ marginRight: "15px" }} />
                    GET Resume
                  </button>
                </ResumeLink>
              </div>
            </Col>
          </Row>
        </Slide>
      </Container>
    </section>
  );
};

export default AboutMe;

const ResumeLink = styled.a`
  text-decoration: none;
`;

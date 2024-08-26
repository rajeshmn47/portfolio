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
                  I'm a dedicated web developer and hard worker. I am from
                  bangalore. Now, I am looking to change my job for better
                  opportunities.
                </p>
                <p className="pt-2 px-md-5 px-lg-0">
                  I have strong Efficiency of Responsive Web Design,
                  Functionality, Authentication, REST API, Database, Git GitHub,
                  Deploy, Google Search, etc, and I try to write clean and
                  scalable code. I have been attached in programming for over
                  three and a half years. and I am open-minded. I try to learn
                  new things quickly, and I always try to keep myself updated, I
                  want to become the best programmer and dedicate all my skills
                  and talents to developing high-quality and unique websites.
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

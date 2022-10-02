import React from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../Shared/Footer/Footer";
import styled from "@emotion/styled";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_qj1o2f9",
        e.target,
        "user_7pnWAd5svNRFlpeUsPKby"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully 😊😊");
        },
        (error) => {
          alert("An error occurred, Please try again 😢😢", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <Container>
        <h2
          className="text-dark ml-5 py-5 skills all_title_section"
          style={{ width: "100%", textAlign: "center" }}
        >
          CONTACT US
        </h2>
        <Row>
          <Col sm={12} md={12} lg={6} xl={6}>
            <p className="px-4">
              You can contact me if you want to know more about me. and You can
              also give me your opinion about my page. My inbox is always open
              for you. I will try my best to reply to all of your messages.
            </p>
            <div>
              <h6 className="contacts pt-4">Bangalore,India</h6>
              <a href="mailto:rajeshmn47@gmail.com" className="contacts">
                <h6>
                  <span>rajeshmn47@gmail.com</span>
                </h6>
              </a>
              <a href="tel:+9660532851600" className="phone">
                <h6 className="contacts pt-2">
                  <span style={{ paddingLeft: "0vw" }}>7259293140</span>
                </h6>
              </a>
            </div>

            <div className="social_media d-flex pt-5 pb-3">
              <a href="mailto:rajeshmn47@gmail.com">
                <EmailIcon />
              </a>
              <a
                href="https://github.com/rajeshmn47"
                target="blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rajeshmn47/"
                target="blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </Col>

          <Col sm={12} md={12} lg={6} xl={6} className="px-lg-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control py-4"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control py-4"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control py-4"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button
                className="btn btn-info btn-lg d-flex ml-auto mr-2 btn-sm btn-lg py-4"
                style={{ width: "100%", color: "#ffffff", fontSize: "1.2rem" }}
              >
                Send
              </button>
            </form>
          </Col>
        </Row>

        <Footer />
      </Container>
    </section>
  );
};

export default ContactUs;

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    .row {
      width: auto;
    }
    form {
      width: 90%;
      margin: auto;
      margin-top: 3vh;
    }
  }
`;

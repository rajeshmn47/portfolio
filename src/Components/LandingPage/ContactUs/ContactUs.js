import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from '@emailjs/browser';
import { Row, Col } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../../Shared/Footer/Footer";
import styled from "@emotion/styled";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_ID, 'serviceid');
    emailjs
      .send(process.env.REACT_APP_SERVICE_ID, 'template_zx9z79x', formData, {
        publicKey: 'O_QYaz0yI2_Z0vgoK',
      })
      .then(
        (result) => {
          alert("Your message has been sent successfully 😊😊");
        },
        (error) => {
          console.log(error, 'error');
          alert("An error occurred, Please try again 😢😢", error.text);
        }
      );

    e.target.reset();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id='contact'>
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
              <a href="tel:+919380899596" className="phone">
                <h6 className="contacts pt-2">
                  <span style={{ paddingLeft: "0vw" }}>9380899596</span>
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
                href="https://www.linkedin.com/in/rajesh-rajesh-806b3b324/"
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control py-4"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control py-4"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="btn btn-info btn-lg d-flex ml-auto mr-2 btn-sm btn-lg py-4"
                style={{
                  width: "100%",
                  color: "#ffffff",
                  fontSize: "1.2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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

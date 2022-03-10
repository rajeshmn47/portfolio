import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Navbar,Container, Nav,Row,Col } from 'react-bootstrap';
import './portfoliotwo.css';
import mainImg from "../images/banner-image.png";
import SkillsItem from './SkillsItem'
import skillsData from "./skills.json";
import aboutUs from "../images/about-us.png";
import logo from "../images/Logo.gif";
import { Fade,Slide } from "react-awesome-reveal";
import Kills from './Kills'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export const Portfolio=()=>{
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    return(
    <>
     <div className="navbar_container">
            <Navbar className="px-lg-5 fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid className="fluid px-lg-5 ">
                    <Navbar.Brand href="/#headerMain"><img src={logo} alt="" className="img-fluid" width="60"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" style={{marginLeft:'100vmax'}} >
                            <Nav.Link className="mr-5" href="/#aboutMe">About Me</Nav.Link>
                            <Nav.Link className="mr-5" href="/#work">Work</Nav.Link>
                            <Nav.Link className="mr-5" href="/#skills">Skills</Nav.Link>
                            <Nav.Link className="mr-5" href="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div>
        <main id="headerMain" className="header_container mt-5 pt-lg-5 pb-5">
      <Container fluid className="px-lg-5 pt-5">
        <Row className="px-lg-5 pt-3">
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className="pt-5">
            
                <h3 className="pt-3 text_title all_title_section">Hey</h3>
                <h1 className="text_title all_title_section">I AM RAJESH</h1>
                <h4 className="text_title pt-2">FULL-STACK WEB DEVELOPER</h4>
                <h4 className="pt-2">
                  I work in{" "}
                  
                </h4>
                <div className="site-buttons pt-5">
            <div className="d-flex flex-row flex-wrap align-itemsjjjdjjdjkdsi-md-center align-items-center ">
                    <a
                      className="text-decoration-none text-white"
                      href="mailto:devabusayed69@gmail.com"
                    >
                      <button
                        type="button"
                        className="button hire_btn shadow-lg mr-4 text-uppercase"
                        style={{marginRight:'1vmax'}}
                      >
                        hire me
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1xpug-Y23EIvioaF9xhw0o6ep17ShsibT/view"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="button get_resume text-uppercase mr-4 "
                      >
                        Resume
                      </button>
                    </a>
                  </div>
                </div>
          
              <div
                className="d-none d-md-block social_media 
                  d-flex-column fixed_bottom pl-2 pb-4 pt-5"
              >
                <a
                  href="mailto:rajeshmn47@gmail.com"
                  target="blank"
                  rel="noopener noreferrer"
                  className="fixed_socialMedia"
                >
               <EmailIcon htmlColor='grey'/>
                </a>
                <a
                  href="https://github.com/rajeshmn47"
                  target="blank"
                  rel="noopener noreferrer"
                  className=" my-4 fixed_socialMedia"
                >
                <GitHubIcon htmlColor='grey'
/>                </a>
                <a
                  href="https://www.linkedin.com/in/rajeshmn47"
                  target="blank"
                  rel="noopener noreferrer"
                  className="fixed_socialMedia"
                >
                <LinkedInIcon htmlColor='grey'/>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} className="headerImg">
      
              <img src={mainImg} className="img-fluid" alt="" />
          
          </Col>
        </Row>
      </Container>
    </main>
   
    <section id="aboutMe" className="pt-lg-5 mt-5 pb-5 aboutMe_container">
      <Container fluid className="px-lg-5 pt-5">
      
          <Row className="px-lg-5">
            <Col sm={12} md={12} lg={6} xl={6} className="p-md-5 p-lg-2">
              <img src={aboutUs} alt="" className="img-fluid p-md-5 p-lg-2" />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="aboutContent">
              <div className="pt-lg-3 pt-xl-5">
                <h1 className="pb-3 all_title_section">LET ME INTRODUCE MYSELF</h1>
                <p className="px-md-5 px-lg-0">
                  I'm a dedicated web developer and hard worker. I am from
                  India and I currently live in Bangalore. Now, I am
                  looking for my first job.
                </p>
                <p className="pt-2 px-md-5 px-lg-0">
                  I have strong Efficiency of Responsive Web Design,
                  Functionality, Authentication, REST API, Database, Git GitHub,
                  Deploy, Google Search, etc, and I try to write clean and scalable
                  code. I have been attached in programming for over one and a
                  half years. and I am open-minded. I try to learn new things
                  quickly, and I always try to keep myself updated, I want to
                  become the best programmer and dedicate all my skills and
                  talents to developing high-quality and unique websites.
                </p>
                <a
                  href="#123"
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  className="d-flex justify-content-md-center justify-content-lg-start"
                >
                  <button className="button hire_btn mt-3 text-uppercase py-3">
          
                    GET Resume
                  </button>
                </a>
              </div>
            </Col>
          </Row>
      
      </Container>
    </section> 
      
   
    </div>
        <div className='skillt'>
    <h1   className="mr-auto ml-auto text-center">SKILLS</h1> 
      
      {skillsData && (
            <div>
              <SkillsItem skill={skillsData} />
            </div>
          )}
    </div>
  <section id="contact" className="pt-5 px-md-5 px-2 from_content">
  <Container fluid className="py-5 px-lg-5">
          <h2 className="text-dark text-center py-5 skills all_title_section">CONTACT US</h2>
        

   
          <Row className="pt-md-5 pt-3">
            <Col sm={12} md={12} lg={6} xl={6} className="px-lg-4">
              <p>
                You can contact me if you want to know more about me. and You
                can also give me your opinion about my page. My inbox is always
                open for you. I will try my best to reply to all of your
                messages.
              </p>

              <div>
                <h6 className="contact pt-4 pb-2">{" "}
                  Bangalore,India
                </h6>
                <a href="mailto:devabusayed69@gmail.com" className="contact">
                  <h6>
                   {" "}
                    <span>rajeshmn47@gmail.com</span>
                  </h6>
                </a>
                <a href="tel:+9660532851600" className="phone">
                  <h6 className="contact pt-2">{" "}
                    <span>+917259293140</span>
                  </h6>
                </a>
              </div>

              <div className="social_media d-flex pt-5 pb-3">
                <a href="mailto:devabusayed69@gmail.com">
                  {" "}
                <EmailIcon htmlColor='grey'/>
                </a>
                <a
                  href="https://github.com/abu-sayed-1"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                <GitHubIcon htmlColor='grey'/>
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-abu-sayed/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                <LinkedInIcon htmlColor='grey'/>
                </a>
              </div>
            </Col>

            <Col sm={12} md={12} lg={6} xl={6} className="px-lg-4">
              <form>
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
                <button className="btn btn-info btn-lg d-flex ml-auto mr-2">
                  Send
                </button>
             
              </form>
            </Col>
          </Row>
          <footer className="d-flex justify-content-center pt-5 footer">
        <p style={{ color: "#204896" }} className="pt-5">
          &copy; {new Date().getFullYear()} all rights reserved by Rajesh
        </p>
      </footer>
      
      </Container>
    </section>
  
        </>
    )
}
export default Portfolio
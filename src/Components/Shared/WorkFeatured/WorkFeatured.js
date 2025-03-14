import React from "react";
import "./WorkFeatured.css";
import githubIcon from "../../images/github.svg.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import styled from "@emotion/styled";

const WorkFeatured = ({ projectData }) => {
  return (
    <div id="work" className="pt-5">
      <section className="my-5 w-100 position-relative WorkFeatured_container">
        <div className="container my-5">
          <Slide bottom>
            <h1 className="text-center all_title_section font-weight-bold text-dark py-5 my-5 text-uppercase">
              MY WORK Featured
            </h1>
          </Slide>
          <WorkF>
            <div className="row">
              {projectData &&
                projectData.map((project, index) => (
                  <Slide bottom key={index} className="col-lg-4">
                    <div className="col-sm-12">
                      <div className="card cards mb-3">
                        <div className="d-flex">
                          <p className="d-flex align-self-center pl-1">
                            <span class="badge bg-success text-white">
                              {project.proj}
                            </span>
                          </p>
                          <div className="card-header border-0 bg-white py-2 ml-auto">
                            <div className="d-flex align-items-center">
                              <a
                                href={project.sourceCodeClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Client-Source-code"
                              >
                                <img
                                  src={githubIcon}
                                  className="img-fluid mr-3 p-1"
                                  width="40"
                                  alt=""
                                />{" "}
                              </a>
                              <a
                                href={project.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit-Website"
                                style={{
                                  marginRight: "15px",
                                  textDecoration: "none",
                                  textTransform: "capitalize",
                                }}
                              >
                                link
                              </a>
                              <a
                                href={project.sourceCodeBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Server-Source-code"
                              >
                                <img
                                  src={githubIcon}
                                  className="img-fluid mr p-1"
                                  width="40"
                                  alt=""
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="project">
                          <img
                            src={project.img}
                            alt={project.title}
                            className="img-fluid"
                          />
                        </div>

                        <div className="p-2">
                          <h4 className="pt-1">{project.title}</h4>
                          <p>
                            {project.summary}{" "}
                            {project.contact && (
                              <a href="/#contact">{project.contact}</a>
                            )}
                          </p>
                        </div>

                        <div className="card-footer work_card p-0 pl-1 bg-white">
                          {project.technology.map((tech, index) => (
                            <label key={index} className="mr-2 p-2 border">
                              {tech.tech}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
            </div>
          </WorkF>
        </div>
        <Link to="/all-projects" className="see_all py-3">
          <button type="button" className="button">
            See All
          </button>
        </Link>
      </section>
    </div>
  );
};

export default WorkFeatured;

const WorkF = styled.div`
  .row {
    width: auto !important;
  }
`;

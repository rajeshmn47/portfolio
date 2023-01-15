import React from "react";
import { Slide } from "react-reveal";

const Footer = () => {
  return (
    <Slide bottom>
      <footer className="d-flex justify-content-center pt-5 footer">
        <p style={{ color: "#204896" }} className="pt-5">
          &copy; {new Date().getFullYear()} all rights reserved by Rajesh
        </p>
      </footer>
    </Slide>
  );
};

export default Footer;

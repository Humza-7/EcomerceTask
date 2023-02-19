import React from "react";
import "./mainComponent.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container-fluid footerLogoContainer">
        <svg
          width="48"
          height="47"
          viewBox="0 0 48 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.7178V24.1598C3.005 24.1578 5.98092 24.7246 8.75748 25.8279C11.534 26.9311 14.0567 28.5492 16.1812 30.5894C18.3052 32.6288 19.9896 35.0502 21.1382 37.715C22.2868 40.3798 22.8769 43.2358 22.875 46.1198H31.6625C31.6546 38.06 28.3163 30.3325 22.3804 24.6329C16.4444 18.9332 8.39555 15.727 0 15.7178H0Z"
            fill="white"
          />
          <path
            d="M43.9463 0.519531H30.02C37.065 4.80549 43.0345 10.5353 47.5 17.2979V3.92873C47.4994 3.02433 47.1247 2.1572 46.4583 1.51792C45.7919 0.878636 44.8884 0.519531 43.9463 0.519531Z"
            fill="white"
          />
          <path
            d="M8.75 0.519531H0V8.12033C10.4947 8.13081 20.5564 12.1376 27.9774 19.2615C35.3984 26.3855 39.5725 36.0446 39.5837 46.1195H47.5V37.7195C45.7102 28.4874 41.05 19.992 34.1331 13.3517C27.2162 6.7115 18.3668 2.23778 8.75 0.519531Z"
            fill="white"
          />
        </svg>
        <h1>logoipsum</h1>
      </div>
      <div className="container-fluid footerContentContainer">
        <div className="row row-col-3">
          <div className="col-4 gy-5">
            <p>
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <p>Copyright Tanah Air Studio</p>
          </div>
          <div className="col-4">
            <h4>Our Social Media</h4>
            <p>Facebook</p>
            <p>Twiter</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div className="col-4">
            <h4>Contact</h4>
            <p>8819 Ohio St. South Gate, California 90280</p>
            <p>ourstudio@hello.com</p>
            <p>+271 386-647-3637</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

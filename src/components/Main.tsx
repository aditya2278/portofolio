import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilepic from "../assets/images/my-profile.jpeg"

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepic} style={{ width: 400, height: 400 }} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aditya2278" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adityakulkarnii/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aditya King</h1>
          <p>Technical Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/aditya2278" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adityakulkarnii/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
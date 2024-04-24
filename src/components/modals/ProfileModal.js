import React from 'react';
import { IoMdHome } from "react-icons/io";
import profilePicture from '../../images/profile.jpg'
import { FaSchool, FaInfoCircle, FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

// Import images
import htmlIcon from '../../images/html.png';
import cssIcon from '../../images/css.svg';
import jsIcon from '../../images/js.png';
import reactIcon from '../../images/react.png';
import mongoIcon from '../../images/mongodb.svg';
import phpIcon from '../../images/php.png';
import sqlIcon from '../../images/sql.png';

const ProfileModal = ({ onClose }) => {
  const skills = [
    { logo: htmlIcon, name: 'HTML', percentage: 80 },
    { logo: cssIcon, name: 'CSS', percentage: 70 },
    { logo: jsIcon, name: 'JS', percentage: 70 },
    { logo: reactIcon, name: 'React', percentage: 50 },
    { logo: mongoIcon, name: 'MongoDB', percentage: 60 },
    { logo: phpIcon, name: 'PHP', percentage: 40 },
    { logo: sqlIcon, name: 'SQL', percentage: 50 }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal profile-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className="modal-content">
          <div className="profile-image">
            <img src={profilePicture} alt="Profile" />
            </div>
          <div className="profile-info">
            <h2>About Me</h2>
            <p><FaInfoCircle /> Bio:<br></br> My name is Joseph, a web developer.</p>
            <p><IoMdHome /> Hometown:<br></br> Baguio City</p>
            <p><FaSchool /> School:<br></br> University of the Cordilleras</p>
            <div className="skills">
              <h3>Skills:</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div key={skill.name} className="skill">
                    <div className="skill-details">
                      <img src={skill.logo} alt={skill.name} />
                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                    <span className="percentage">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="social-links">
              <h3>Social Links:</h3>
              <div className="social-link">
                <a href="facebook-url"><FaFacebook /></a>
                <a href="instagram-url"><RiInstagramFill /></a>
                <a href="linkedin-url"><TiSocialLinkedinCircular /></a>
                <a href="github-url"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;

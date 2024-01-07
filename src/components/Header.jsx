import Avatar from "../assets/img/avatar.svg";
import OpenWork from "../assets/icons/bullseye-arrow.svg";
import CloseWork from "../assets/icons/times-circle.svg";
import resume from "../assets/icons/file-user.svg";
import Liknedindark from "../assets/icons/Liknedin-dark.svg";
import Liknedinlight from "../assets/icons/Liknedin-light.svg";
import Githubdark from "../assets/icons/github-dark.svg";
import Githublight from "../assets/icons/github-light.svg";
import resumedoc from "../assets/documents/CV_NelsonMorales_1002035487.pdf";
import { useState } from "react";

const Header = (props) => {
  const [openwork, setOpenWork] = useState(true);
  return (
    <header>
      <figure>
        <img src={Avatar} alt="Profile Image" />
      </figure>
      <section className="content">
        <div className="info&social">
          <h1>Nelson Morales</h1>
          <div className="social">
            <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/cmrales26/" target="_blank">
              {props.theme === "dark" ? (
                <img src={Liknedindark} alt="Open work Icon" />
              ) : (
                <img src={Liknedinlight} alt="Open work Icon" />
              )}
            </a>
            <a href="https://github.com/Cmrales26" target="_blank">
              {props.theme === "dark" ? (
                <img src={Githubdark} alt="Open work Icon" />
              ) : (
                <img src={Githublight} alt="Open work Icon" />
              )}
            </a>
          </div>
        </div>

        <div className="mystatus">
          <div className="status">
            {openwork ? (
              <div className="avilable">
                <img src={OpenWork} alt="Open work Icon" />
                Open to work
              </div>
            ) : (
              <div className="close">
                <img src={CloseWork} alt="Open work Icon" />
                Close to work
              </div>
            )}
          </div>
          <div className="resume">
            <img src={resume} alt="" />
            <a href={resumedoc} download={true}>
              Resume
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

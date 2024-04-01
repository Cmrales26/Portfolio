import Avatar from "../assets/img/avatar.svg";
import OpenWork from "../assets/icons/bullseye-arrow.svg";
import CloseWork from "../assets/icons/times-circle.svg";
import resume from "../assets/icons/file-user.svg";
import Liknedindark from "../assets/icons/Liknedin-dark.svg";
import Liknedinlight from "../assets/icons/Liknedin-light.svg";
import Githubdark from "../assets/icons/github-dark.svg";
import Githublight from "../assets/icons/github-light.svg";
import resumedoc from "../assets/documents/CV_NelsonMorales_1002035487.pdf";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ theme }) => {
  // False to chage the status
  const [openwork] = useState(true);

  const { t } = useTranslation(["info"]);
  return (
    <header>
      <figure>
        <img src={Avatar} alt="Profile Image" />
      </figure>
      <section className="content">
        <div className="info&social">
          <h1>Nelson Morales</h1>
          <div className="social">
            <p>{t("charge")}</p>
            <a
              href="https://www.linkedin.com/in/cmrales26/"
              target="_blank noopener noreferrer"
            >
              {theme === "dark" ? (
                <img src={Liknedindark} alt="Likedin Icon" />
              ) : (
                <img src={Liknedinlight} alt="Linkedin Icon Light" />
              )}
            </a>
            <a
              href="https://github.com/Cmrales26"
              target="_blank noopener noreferrer"
            >
              {theme === "dark" ? (
                <img src={Githubdark} alt="Github Icon " />
              ) : (
                <img src={Githublight} alt="Github Icon dark" />
              )}
            </a>
          </div>
        </div>

        <div className="mystatus">
          <div className="status">
            {openwork ? (
              <div className="avilable">
                <img src={OpenWork} alt="Open work Icon" />
                {t("OpenToWork")}
              </div>
            ) : (
              <div className="close">
                <img src={CloseWork} alt="Open work Icon" />
                <span></span>
                {t("CloseToWork")}
              </div>
            )}
          </div>
          <div className="resume">
            <img src={resume} alt="" />
            <a href={resumedoc} download={true}>
              {t("Resume")}
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Header;

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useIcons } from "../context/Icons";
import { ActivateAnomation } from "../Animations/ScrollAnimation";
import { useTranslation } from "react-i18next";

const Skills = ({ theme }) => {
  const { iconsdark, iconslight } = useIcons();
  const [skills, setSkills] = useState([]);
  const { t } = useTranslation(["info"]);

  useEffect(() => {
    if (theme === "dark") {
      setSkills(Object.values(iconsdark));
      ActivateAnomation();
    } else {
      setSkills(Object.values(iconslight));
      ActivateAnomation();
    }
  }, [theme, iconsdark, iconslight]);

  return (
    <section id="Skills">
      <h1>{t("skillsTitle")}</h1>
      <div className="scroller">
        {ActivateAnomation() ? (
          <div className="scroller__inner">
            {skills.map((icon, index) => (
              <img
                // title={}
                key={index}
                src={icon}
                alt={`Skill ${index}`}
              />
            ))}
            {skills.map((icon, index) => (
              <img key={index} src={icon} alt={`Skill ${index}`} />
            ))}{" "}
          </div>
        ) : (
          <div className="scroller__inner">
            {skills.map((icon, index) => (
              <img key={index} src={icon} alt={`Skill ${index}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

Skills.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Skills;

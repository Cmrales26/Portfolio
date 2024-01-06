import { useEffect, useState } from "react";
import { useIcons } from "../context/Icons";
import { ActivateAnomation } from "../Animations/ScrollAnimation";

const Skills = (props) => {
  const { iconsdark, iconslight } = useIcons();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    if (props.theme === "dark") {
      setSkills(Object.values(iconsdark));
      ActivateAnomation();
    } else {
      setSkills(Object.values(iconslight));
      // ActivateAnomation();
    }
  }, [props.theme]);

  return (
    <section id="Skills">
      <h1>Skills</h1>
      <div className="scroller">
        <div className="scroller__inner">
          {skills.map((icon, index) => (
            <img key={index} src={icon} alt={`Skill ${index}`} />
          ))}
          {skills.map((icon, index) => (
            <img key={index} src={icon} alt={`Skill ${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

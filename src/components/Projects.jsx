import { useTranslation } from "react-i18next";
import LinkIcon from "../assets/icons/alternate-external-link.svg";
import { useIcons } from "../context/Icons";
import { useProjects } from "../context/Projects";
import { useEffect, useState } from "react";
const Projects = () => {
  const { projects } = useProjects();
  const { iconsdark } = useIcons();

  const { t } = useTranslation(["info"]);
  return (
    <section id="Projects">
      <h1>{t("projectTitle")}</h1>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.img} className="projectimga" alt="" />
            <div className="projectHover">
              <div className="titleandlink">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank">
                  {project.status === "active" ? (
                    <img src={LinkIcon} alt="Link" />
                  ) : null}
                </a>
              </div>
              <div className="pageinfo">
                <p>{project.info}</p>
              </div>
              <div className="techs">
                {project.tech.map((tech, index) => (
                  <div key={index} className="techs">
                    {Object.values(tech).map((value, index) => (
                      <img
                        key={index}
                        src={iconsdark[value]}
                        alt={`${value} icon`}
                        className={`techicon ${value}icon`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

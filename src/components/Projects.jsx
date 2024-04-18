import { useTranslation } from "react-i18next";
// import LinkIcon from "../assets/icons/alternate-external-link.svg";
// import Link from "../assets/icons/link-intact.svg";
// import { useIcons } from "../context/Icons";
import { useProjects } from "../context/Projects";
const Projects = () => {
  const { projects } = useProjects();
  // const { iconsdark } = useIcons();

  const { t } = useTranslation(["info"]);
  return (
    <section id="Projects">
      <h1>{t("projectTitle")}</h1>
      <div className="projects">
        {projects.map((project) => (
          <a
            className="project"
            href={project.status === "active" ? project.link : null}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            style={{ textDecoration: "none" }}
            title="Click to Whatch the Project"
          >
            <div>
              <div className="titleandlink">
                <h3>{project.title}</h3>
              </div>
              <div className="pageinfo">
                <p>{project.info}</p>
              </div>

              <div className="techs">
                {project.tech.map((tech, index) => (
                  <div key={index} className="techs">
                    {Object.values(tech).map((value, index) => (
                      <div className="tech" key={index}>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

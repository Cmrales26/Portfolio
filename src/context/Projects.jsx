import { useContext } from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("There isn't  a provider");
  return context;
};

export const ProjectProvider = ({ children }) => {
  const { t } = useTranslation(["info"]);
  const projects = [
    {
      id: 1,
      title: "IconStore",
      link: "https://rubrica-c3-client.vercel.app/",
      status: "active",
      info: t("projectInfo_1"),
      tech: [
        {
          vite: "vite",
          sql: "sql",
          express: "express",
          css: "css",
        },
      ],
    },
    {
      id: 2,
      title: "Admin Dashboard",
      link: "https://admin-dashboard-delta-navy.vercel.app/",
      status: "active",
      info: t("projectInfo_2"),
      tech: [
        {
          vite: "vite",
          sql: "sql",
          express: "express",
          material: "material",
        },
      ],
    },
    {
      id: 3,
      link: "https://proyectosempiternosoft.000webhostapp.com/",
      title: "Sempiterno",
      status: "active",
      info: t("projectInfo_3"),
      tech: [
        {
          php: "php",
          sql: "sql",
          html: "html",
          css: "css",
          js: "js",
        },
      ],
    },

    {
      id: 4,
      title: "kinematic simulators",
      link: "https://cmrales26.github.io/Modelos_Ingenieria/index.html",
      status: "active",
      info: t("projectInfo_4"),
      tech: [
        {
          python: "python",
          html: "html",
          css: "css",
          js: "js",
        },
      ],
    },

    {
      id: 5,
      title: "DN sports",
      link: "https://rubrica-c1-w2.vercel.app/",
      status: "active",
      info: t("projectInfo_5"),
      tech: [
        {
          node: "node",
          vite: "vite",
          js: "js",
        },
      ],
    },

    {
      id: 6,
      title: "Binary Tree",
      link: "https://binarytreephpvis.000webhostapp.com/",
      status: "active",
      info: t("projectInfo_6"),
      tech: [
        {
          php: "php",
          node: "node",
          js: "js",
          css: "css",
          html: "html",
        },
      ],
    },
  ];
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

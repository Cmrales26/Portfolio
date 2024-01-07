import { useContext } from "react";
import { createContext } from "react";
import Iconstore from "../assets/img/IconStore.jpeg";
import Recipes from "../assets/img/RecipesWebapp.svg";
import sempiterno from "../assets/img/Sempiterno.jpg";
import simulators from "../assets/img/Simulators.jpg";
import Dnsports from "../assets/img/DNSports.png";
import BinaryTree from "../assets/img/BinaryTree.jpg";
import { useTranslation } from "react-i18next";

export const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("There isn't  a provider");
  return context;
};

export const ProjectProvider = ({ children }) => {
  const { t, i18n } = useTranslation(["info"]);
  const projects = [
    {
      id: 1,
      title: "IconStore",
      img: Iconstore,
      link: "https://rubrica-c3-client.vercel.app/",
      status: "active",
      info: t("projectInfo_1"),
      tech: [
        {
          node: "node",
          vite: "vite",
          sql: "sql",
          express: "express",
          react: "react",
          js: "js",
          css: "css",
        },
      ],
    },
    {
      id: 2,
      title: "Recipes Web App",
      link: "",
      img: Recipes,
      status: "Progress",
      info: t("projectInfo_2"),
      tech: [
        {
          node: "node",
          vite: "vite",
          sql: "sql",
          express: "express",
          react: "react",
          js: "js",
          css: "css",
          material: "material",
        },
      ],
    },
    {
      id: 3,
      link: "https://proyectosempiternosoft.000webhostapp.com/",
      title: "Sempiterno",
      img: sempiterno,
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
      img: simulators,
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
      img: Dnsports,
      status: "active",
      info: t("projectInfo_5"),
      tech: [
        {
          node: "node",
          vite: "vite",
          react: "react",
          js: "js",
          css: "css",
          html: "html",
        },
      ],
    },

    {
      id: 6,
      title: "Binary Tree",
      link: "https://binarytreephpvis.000webhostapp.com/",
      img: BinaryTree,
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

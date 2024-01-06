import { useContext } from "react";
import { createContext } from "react";
import Iconstore from "../assets/img/IconStore.jpeg";
import Recipes from "../assets/img/RecipesWebapp.svg";
import sempiterno from "../assets/img/Sempiterno.jpg";
import simulators from "../assets/img/Simulators.jpg";
import Dnsports from "../assets/img/DNSports.png";
import BinaryTree from "../assets/img/BinaryTree.jpg";

export const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("There isn't  a provider");
  return context;
};

export const ProjectProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "IconStore",
      img: Iconstore,
      link: "https://rubrica-c3-client.vercel.app/",
      status: "active",
      info: `It's a platform for buying electronic devices. Users manage the
            stock by purchasing or deleting products. The administrator
            constantly updates the inventory to ensure an optimal shopping
            experience.`,
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
      info: `The platform enables users to log in, browse, save favorite
                recipes, and rate them, providing a convenient way to discover,
                collect, and evaluate personalized recipes.`,
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
      info: `The web application Connect and engage with your church
                community through our web platform. Create forums and posts,
                encouraging interaction and discussions among members, fostering
                a vibrant online congregation.`,
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
      info: ` A web platform offers interactive simulators for kinematics and
      Newton's laws. Users input study values to generate graphic
      animations and view detailed results in tables, providing an
      educational and intuitive experience.`,
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
      info: ` Browse top athletes and sports categorized by type on our
                platform. Discover the best in each category and suggest new
                sports to expand our coverage.`,
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
      info: ` Create your own binary tree interactively on our platform. Once
      constructed, explore various tree traversals, examine leaf
      nodes, and check if the tree is complete. Dive into the world of
      binary trees, visualize their structures, and explore their
      properties effortlessly.`,
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

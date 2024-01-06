import { createContext, useContext } from "react";

import node from "../assets/icons/Skills/nodejs.svg";
import vite from "../assets/icons/Skills/vitejs.svg";
import sql from "../assets/icons/Skills/mysql.svg";
import express from "../assets/icons/Skills/expressjs_dark.svg";
import react from "../assets/icons/Skills/react.svg";
import css from "../assets/icons/Skills/css.svg";
import js from "../assets/icons/Skills/javascript.svg";
import php from "../assets/icons/Skills/php_dark.svg";
import html from "../assets/icons/Skills/html5.svg";
import python from "../assets/icons/Skills/python.svg";
import material from "../assets/icons/Skills/Material.svg";

import sqllight from "../assets/icons/Skills/mysql_Light.svg";
import phplight from "../assets/icons/Skills/php_light.svg";
import expresslight from "../assets/icons/Skills/expressjs_light.svg";

export const IconsContext = createContext();

export const useIcons = () => {
  const context = useContext(IconsContext);
  if (!context) throw new Error("There is no Icon Context");
  return context;
};

export const IconProvider = ({ children }) => {
  const iconsdark = {
    node: node,
    vite: vite,
    sql: sql,
    express: express,
    react: react,
    css: css,
    js: js,
    php: php,
    html: html,
    python: python,
    material: material,
  };

  const iconslight = {
    node: node,
    vite: vite,
    sql: sqllight,
    express: expresslight,
    react: react,
    css: css,
    js: js,
    php: phplight,
    html: html,
    python: python,
    material: material,
  };
  return (
    <IconsContext.Provider value={{ iconsdark, iconslight }}>
      {children}
    </IconsContext.Provider>
  );
};

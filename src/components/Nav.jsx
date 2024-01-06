import { useEffect, useState } from "react";
import light from "../assets/theme/sun.svg";
import dark from "../assets/theme/moon-stars.svg";

const Nav = (props) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      props.setTheme(storedTheme);
    } else {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggletheme = () => {
    const newTheme = props.theme === "dark" ? "light" : "dark";
    props.setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <nav>
      <ul>
        <li className="">Idioma</li>
        <li className="ThemeSelector">
          {props.theme === "dark" ? (
            <img
              onClick={toggletheme}
              src={light}
              alt="Sun Image"
              className="themeIcon"
            />
          ) : (
            <img
              onClick={toggletheme}
              src={dark}
              alt="Sun Image"
              className="themeIcon"
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

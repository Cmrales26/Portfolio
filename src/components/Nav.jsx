import { useEffect } from "react";
import light from "../assets/theme/sun.svg";
import dark from "../assets/theme/moon-stars.svg";
import Lenguage from "./Lenguage";

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
        <li className="">
          <Lenguage theme={props.theme} />
        </li>
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

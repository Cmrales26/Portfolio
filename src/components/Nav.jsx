import { useState } from "react";
import light from "../assets/theme/sun.svg";
import dark from "../assets/theme/moon-stars.svg";

const Nav = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <nav>
      <ul>
        <li className="">Idioma</li>
        <li className="ThemeSelector">
          {theme === "dark" ? (
            <img
              onClick={() => setTheme("light")}
              src={light}
              alt="Sun Image"
              className="themeIcon"
            />
          ) : (
            <img
              onClick={() => setTheme("dark")}
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

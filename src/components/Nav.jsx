import { useEffect, useState } from "react";
import light from "../assets/theme/sun.svg";
import dark from "../assets/theme/moon-stars.svg";
import menulight from "../assets/icons/menu-light.svg";
import menudark from "../assets/icons/menu.svg";
import Lenguage from "./Lenguage";
import cross from "../assets/icons/times.svg";
import crosslight from "../assets/icons/times-light.svg";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Nav = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["info"]);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const defaultTheme = prefersDarkMode ? "dark" : "light";
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  });

  const toggletheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav id="Nav">
      <ul>
        <li className="menuitemtrigger" onClick={toggleMenu}>
          {theme === "dark" ? (
            isOpen ? (
              <img src={cross} alt="" />
            ) : (
              <img src={menulight} alt="" />
            )
          ) : isOpen ? (
            <img src={crosslight} alt="" />
          ) : (
            <img src={menudark} alt="" />
          )}
        </li>
        <li>
          <ul className="Navigation">
            <li className="navItem">
              <a href="#Aboutme">{t("menuitem1")}</a>
            </li>
            <li className="navItem">
              <a href="#Projects">{t("menuitem2")}</a>
            </li>
            <li className="navItem">
              <a href="#Skills">{t("menuitem3")}</a>
            </li>
            <li className="navItem">
              <a href="#contact">{t("menuitem4")}</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="">
              <Lenguage theme={theme} />
            </li>
            <li className="ThemeSelector">
              {theme === "dark" ? (
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
        </li>
      </ul>

      {/* Hamburger Toggle */}

      <ul
        className={`Navigation-ham ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
      >
        <li className="navItem">
          <a href="#Aboutme">{t("menuitem1")}</a>
        </li>
        <li className="navItem">
          <a href="#Projects">{t("menuitem2")}</a>
        </li>
        <li className="navItem">
          <a href="#Skills">{t("menuitem3")}</a>
        </li>
        <li className="navItem">
          <a href="#contact">{t("menuitem4")}</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  theme: PropTypes.isRequired,
  setTheme: PropTypes.isRequired,
};

export default Nav;

import { useEffect, useState } from "react";
import light from "../assets/theme/sun.svg";
import dark from "../assets/theme/moon-stars.svg";
import menulight from "../assets/icons/menu-light.svg";
import menudark from "../assets/icons/menu.svg";
import Lenguage from "./Lenguage";
import cross from "../assets/icons/times.svg";
import crosslight from "../assets/icons/times-light.svg";
import { useTranslation } from "react-i18next";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["info"]);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      props.setTheme(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const defaultTheme = prefersDarkMode ? "dark" : "light";
      props.setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const toggletheme = () => {
    const newTheme = props.theme === "dark" ? "light" : "dark";
    props.setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav id="Nav">
      <ul>
        <li className="menuitemtrigger" onClick={toggleMenu}>
          {props.theme === "dark" ? (
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

export default Nav;

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
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scrollers) => {
        scrollers.setAttribute("data-animated", true);
        const scrollerInner = document.querySelector(".scroller__inner");
        const scrollerInnerContent = Array.from(scrollerInner.children);
        scrollerInnerContent.forEach((item) => {
          const duplicateditem = item.cloneNode(true);
          duplicateditem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicateditem);
        });
      });
    }
  }, []);

  return (
    <section id="Skills">
      <h1>Skills</h1>
      <div className="scroller">
        <div className="scroller__inner">
          <img src={node} alt="" />
          <img src={react} alt="" />
          <img src={vite} alt="" />
          <img src={express} alt="" />
          <img src={js} alt="" />
          <img src={sql} alt="" />
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={php} alt="" />
          <img src={python} alt="" />
          <img src={material} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

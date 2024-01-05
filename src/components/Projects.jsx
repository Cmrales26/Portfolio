import Iconstore from "../assets/img/IconStore.jpeg";
import Recipes from "../assets/img/RecipesWebapp.svg";
import sempiterno from "../assets/img/Sempiterno.jpg";
import simulators from "../assets/img/Simulators.jpg";
import Dnsports from "../assets/img/DNSports.png";
import BinaryTree from "../assets/img/BinaryTree.jpg";
import LinkIcon from "../assets/icons/alternate-external-link.svg";
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
const Projects = () => {
  return (
    <section id="Projects">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project project1">
          <img src={Iconstore} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>IconStore</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                It's a platform for buying electronic devices. Users manage the
                stock by purchasing or deleting products. The administrator
                constantly updates the inventory to ensure an optimal shopping
                experience.
              </p>
            </div>
            <div className="techs">
              <img src={node} alt="Node icon" className="techicon" />
              <img src={vite} alt="vite icon" className="techicon" />
              <img src={sql} alt="sql icon" className="techicon" />
              <img src={express} alt="express icon" className="techicon" />
              <img src={react} alt="react icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
            </div>
          </div>
        </div>

        <div className="project project2">
          <img src={Recipes} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>Recipes Web App</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                The platform enables users to log in, browse, save favorite
                recipes, and rate them, providing a convenient way to discover,
                collect, and evaluate personalized recipes.
              </p>
            </div>
            <div className="techs">
              <img src={node} alt="Node icon" className="techicon" />
              <img src={vite} alt="vite icon" className="techicon" />
              <img src={sql} alt="sql icon" className="techicon" />
              <img src={express} alt="express icon" className="techicon" />
              <img src={react} alt="react icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
              <img src={material} alt="material icon" className="techicon" />
            </div>
          </div>
        </div>

        <div className="project project3">
          <img src={sempiterno} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>Sempiterno</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                The web application Connect and engage with your church
                community through our web platform. Create forums and posts,
                encouraging interaction and discussions among members, fostering
                a vibrant online congregation.
              </p>
            </div>
            <div className="techs">
              <img src={php} alt="php icon" className="techicon" />
              <img src={sql} alt="sql icon" className="techicon" />
              <img src={html} alt="html icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
            </div>
          </div>
        </div>

        <div className="project project4">
          <img src={simulators} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>kinematic simulators</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                A web platform offers interactive simulators for kinematics and
                Newton's laws. Users input study values to generate graphic
                animations and view detailed results in tables, providing an
                educational and intuitive experience.
              </p>
            </div>
            <div className="techs">
              <img
                src={python}
                alt="python icon"
                className="techicon pythonicon"
              />
              <img src={html} alt="html icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
            </div>
          </div>
        </div>

        <div className="project project5">
          <img src={Dnsports} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>DN sports</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                Browse top athletes and sports categorized by type on our
                platform. Discover the best in each category and suggest new
                sports to expand our coverage. Engage with a comprehensive array
                of sporting information and talent, making it a hub for sports
                enthusiasts.
              </p>
            </div>
            <div className="techs">
              <img src={node} alt="Node icon" className="techicon" />
              <img src={vite} alt="vite icon" className="techicon" />
              <img src={react} alt="react icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
              <img src={html} alt="html icon" className="techicon" />
            </div>
          </div>
        </div>

        <div className="project project6">
          <img src={BinaryTree} className="projectimga" alt="" />
          <div className="projectHover">
            <div className="titleandlink">
              <h3>Binary Tree</h3>
              <a href="">
                <img src={LinkIcon} alt="Link" />
              </a>
            </div>
            <div className="pageinfo">
              <p>
                Create your own binary tree interactively on our platform. Once
                constructed, explore various tree traversals, examine leaf
                nodes, and check if the tree is complete. Dive into the world of
                binary trees, visualize their structures, and explore their
                properties effortlessly.
              </p>
            </div>
            <div className="techs">
              <img src={php} alt="php icon" className="techicon" />
              <img src={node} alt="Node icon" className="techicon" />
              <img src={js} alt="js icon" className="techicon" />
              <img src={css} alt="css icon" className="techicon" />
              <img src={html} alt="html icon" className="techicon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

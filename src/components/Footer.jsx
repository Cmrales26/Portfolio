import { useTranslation } from "react-i18next";
import arrowup from "../assets/icons/up-arrow.svg";

const Footer = () => {
  const { t } = useTranslation(["info"]);
  return (
    <>
      <footer>
        <hr />
        <article>
          <p>
            &copy; {t("footer")}{" "}
            <a href="https://github.com/Cmrales26" target="_blank">
              @Crmales26
            </a>
          </p>
          <figure>
            <a href="#Nav">
              <img src={arrowup} className="arrowUp" alt="Arrow up" />
            </a>
          </figure>
        </article>
      </footer>
    </>
  );
};

export default Footer;

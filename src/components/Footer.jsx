import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["info"]);
  return (
    <footer>
      <hr />
      <p>
        &copy; {t("footer")} {" "}
        <a href="https://twitter.com/Cmrales26" target="_blank">
          @Crmales26
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["info"]);
  return (
    <section id="Aboutme">
      <h1>{t("aboutTitle")}</h1>
      <p>
        {t("aboutInfo_1")}
        <span className="accenttext">{t("aboutInfo_1_span")}</span>
        {t("aboutInfo_2")}
        <span className="accenttext">{t("aboutInfo_2_span")}</span>{" "}
        {t("aboutInfo_3")}
      </p>
    </section>
  );
};

export default About;

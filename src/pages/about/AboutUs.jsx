import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="xl:px-[11rem] min-h-screen max-w-screen-2xl">
      <h1 className="text-3xl">{t("aboutTitle")}</h1>
      <p className="text-xl">{t("aboutDescription", "We are committed to...")}</p>
    </div>
  );
};

export default AboutUs;

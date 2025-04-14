import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { asserts } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full h-[72px] px-4 sticky top-0 ${scrolled ? "bg-white z-99 shadow-xs" : "bg-transparent z-100"}`}>
      <div className="flex justify-between px-[2px] md:py-[21px] lg:px-[40px] xl:px-[10rem] max-w-screen-2xl mx-auto h-full items-center">
        <div className="flex">
          <ul className="flex gap-2 lg:gap-6 text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
            <Link to={"/"} className="hover:underline">
              <li>{t("home")}</li>
            </Link>
            <Link to={"/programs"} className="hover:underline">
              <li>{t("programs")}</li>
            </Link>
            <Link to={"/blogs"} className="hover:underline">
              <li>{t("blogs")}</li>
            </Link>
            <Link to={"/results"} className="hover:underline">
              <li>{t("result")}</li>
            </Link>
            <Link to={"/contact"} className="hover:underline">
              <li>{t("contact")}</li>
            </Link>
            <Link to={"/aboutus"} className="hover:underline">
              <li>{t("aboutus")}</li>
            </Link>
          </ul>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to={"/"} className="">
            <img src={asserts.CIMO_LOGO} className="h-15" alt="snoopedu logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button className="py-2 px-3 md:py-2 md:px-4 text-lg md:text-[16px] text-white hover:shadow-xl cursor-pointer bg-primary rounded-lg">
            {t("login", "Login")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

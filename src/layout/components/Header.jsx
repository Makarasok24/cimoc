import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { asserts } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { scrollToTop } from "../../utils/scrollToTop";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePrograms = () => {
    setShowPrograms(!showPrograms);
  };

  return (
    <header className={`w-full h-[72px] px-4 sticky top-0 ${scrolled ? "bg-white z-99 shadow-xs" : "bg-transparent z-100"}`}>
      <div className="flex justify-between px-[2px] md:py-[21px] lg:px-[40px] xl:px-[10rem] max-w-screen-2xl mx-auto h-full items-center">
        <div className="flex">
          <ul className="flex gap-2 lg:gap-6 text-[12px] md:text-[14px] lg:text-[16px] font-semibold relative">
            <Link to="/" onClick={scrollToTop}>
              <li>{t("home")}</li>
            </Link>

            {/* Programs with dropdown */}
            <li className="relative cursor-pointer" onClick={togglePrograms}>
              <span className=" flex gap-2 items-center">
                <p>
                  {t("programs")}
                </p>
                {showPrograms ? <IoChevronUp /> : <IoChevronDown />}
              </span>
              {showPrograms && (
                <ul className="absolute left-0 mt-5 bg-white shadow-md text-black rounded-md z-50 min-w-60">
                  <li>
                    <Link to="/programs/examination-policy" onClick={() => { scrollToTop(); setShowPrograms(false); }} className="block px-4 py-2 hover:bg-gray-100">
                      {t("ExaminationPolicy")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/sample-docs" onClick={() => { scrollToTop(); setShowPrograms(false); }} className="block px-4 py-2 hover:bg-gray-100">
                      {t("SampleDocuments")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/mock-test" onClick={() => { scrollToTop(); setShowPrograms(false); }} className="block px-4 py-2 hover:bg-gray-100">
                      {t("Mocktest")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs/past-papers" onClick={() => { scrollToTop(); setShowPrograms(false); }} className="block px-4 py-2 hover:bg-gray-100">
                      {t("Pastpapers")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <Link to="/blogs" onClick={scrollToTop}>
              <li>{t("blogs")}</li>
            </Link>
            <Link to="/results" onClick={scrollToTop}>
              <li>{t("result")}</li>
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              <li>{t("contact")}</li>
            </Link>
            <Link to="/aboutus" onClick={scrollToTop}>
              <li>{t("aboutus")}</li>
            </Link>
          </ul>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" onClick={scrollToTop}>
            <img src={asserts.CIMO_LOGO} className="h-15" alt="cimoc logo" />
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

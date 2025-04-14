import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoMailOpenOutline, IoMailOutline } from "react-icons/io5";
import { asserts } from "../../assets/assets";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { i18n, t } = useTranslation();
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61562504455106",
      icon: <IoLogoFacebook />,
      label: "Follow us on Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      href: "https://www.tiktok.com/@cimoc.cambodia",
      icon: <IoLogoTiktok />,
      label: "Watch us on TikTok",
      color: "hover:text-[#ff0050]",

    },
    {
      href: "https://t.me/cimoc_channel",
      icon: <FaTelegram />,
      label: "Join our Telegram",
      color: "hover:text-[#229ED9]",
    },
    {
      href: "https://www.instagram.com/cimoccambodia/",
      icon: <IoLogoInstagram />,
      label: "Follow us on Instagram",
      color: "hover:text-[#C13584]",
    },
    {
      href: "mailto:cimoccommittee@gmail.com",
      icon: <IoMailOutline />,
      label: "Send us an email",
      color: "hover:text-red-500",
    },
  ];
  return (
    <footer className="flex flex-col text-white  py-[5rem] px-[11rem] w-full bg-third mt-2">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 py-[20px]">
          <img
            className="w-50"
            src={asserts.CIMOC_Footer}
            alt="cimoc-logo"
          />
          <div className="font-en">
            <p>
              Address: Phnom Penh, Cambodia
            </p>
            <p>
              Contact
            </p>
            <p className="font-en">
              (+855)1234568
            </p>
            <p className="font-en">
              cimoccommittee@gmail.com
            </p>
            {/* icons media*/}
            <div className="flex gap-5 text-3xl mt-10">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  className={`relative group transition-all duration-300 `}
                >
                  <span className={`inline-block ${item.color} transition duration-300`}>
                    {item.icon}
                  </span>
                  <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition duration-300 text-sm px-2 py-1 rounded bg-black text-white whitespace-nowrap z-50">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-[5rem] mt-5">
          <div className="flex flex-col">
            <p className="font-semibold">
              {t("programs")}
            </p>
            <ul className="gap-2 flex flex-col mt-5">
              <li>
                Program 1
              </li>
              <li>
                Program 2
              </li>
              <li>
                Program 3
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold">
              {t("result")}
            </p>
            <ul className="gap-2 flex flex-col mt-5">
              <li>
                Result 1
              </li>
              <li>
                Result 2
              </li>
              <li>
                Result 3
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold">
              {t("aboutus")}
            </p>
            <ul className="gap-2 flex flex-col mt-5">
              <li>
                Who are we?
              </li>
              <li>
                Mission, Vission, Core Value
              </li>
              <li>
                Team Members
              </li>
            </ul>
            <p className="font-semibold mt-5">
              {t("support")}
            </p>
            <img src={asserts.SMART_EDU_NOBG} className="w-25 mt-2" alt="smart_edu" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-5 bg-white"></div>
      <p className="text-center mt-10 font-en">
        © {new Date().getFullYear()} CIMOC CAMBODIA. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

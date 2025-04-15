import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoMailOutline,
} from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { asserts } from "../../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
    <footer className="bg-third text-white xl:mt-[5rem]">
      <div className="max-w-screen-2xl mx-auto px-4 xl:px-[11rem] py-10 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <img src={asserts.CIMOC_Footer} alt="cimoc-logo" className="w-48" />
            <div className="text-sm font-en">
              <p>Address: Phnom Penh, Cambodia</p>
              <p>Contact: (+855)1234568</p>
              <p>Email: cimoccommittee@gmail.com</p>
            </div>
            <div className="flex gap-4 text-2xl mt-4">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group transition-all duration-300 ${item.color}`}
                >
                  <span className="inline-block">{item.icon}</span>
                  <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition duration-300 text-sm px-2 py-1 rounded bg-black text-white whitespace-nowrap z-50">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold mb-4">{t("programs")}</p>
              <ul className="space-y-2 text-sm">
                <li>Program 1</li>
                <li>Program 2</li>
                <li>Program 3</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">{t("result")}</p>
              <ul className="space-y-2 text-sm">
                <li>Result 1</li>
                <li>Result 2</li>
                <li>Result 3</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">{t("aboutus")}</p>
              <ul className="space-y-2 text-sm">
                <li>Who are we?</li>
                <li>Mission, Vision, Core Value</li>
                <li>Team Members</li>
              </ul>
              <p className="font-semibold mt-6 mb-2">{t("support")}</p>
              <img
                src={asserts.SMART_EDU_NOBG}
                alt="smart_edu"
                className="w-28"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white" />
        <p className="text-center text-sm font-en mt-4">
          © {new Date().getFullYear()} CIMOC CAMBODIA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

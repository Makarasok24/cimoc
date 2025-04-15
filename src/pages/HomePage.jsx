import React from 'react'
import ShiftingCountdown from '../components/ShiftingCountdown'
import { useTranslation } from "react-i18next";
import { asserts } from '../assets/assets';
import Announcement from '../components/Announcement';
import ObjectiveCard from '../components/ObjectiveCard';
import { motion } from "framer-motion";
const HomePage = () => {
  const { i18n, t } = useTranslation();
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const cardData = [
    {
      id: 1,
      iconBg: "bg-[#dcb9f6]",
      icon: asserts.Math,
      title: "CIMOCMathChallenge",
      description: "CIMOCMathChallengeDescription"
    },
    {
      id: 2,
      iconBg: "bg-[#fbe2e3]",
      icon: asserts.Brain, // Consider using a different icon if available
      title: "ChallengeStudents",
      description: "ChallengeStudentsDescription"
    },
    {
      id: 3,
      iconBg: "bg-[#8080ff]",
      icon: asserts.Support, // Consider using a different icon if available
      title: "SupportCommunity",
      description: "SupportCommunityDescription"
    }
  ];
  return (
    <div className='max-w-screen-2xl min-h-screen mx-auto xl:px-[11rem] xl:mt-5'>
      <Announcement />
      <p className='text-3xl font-bold text-center mt-[5rem]'>
        {t("examDay")}
      </p>
      <ShiftingCountdown />
      {/* should put objective here as 3 grids */}
      <h3 className='mt-5 text-3xl font-semibold text-center'>
        {t("Ourmainobjectives")}
      </h3>
      <div className="max-w-screen-2xl grid grid-cols-3 gap-10 mt-10">
        {cardData.map((card) => (
          <ObjectiveCard
            key={card.id}
            iconBg={card.iconBg}
            icon={card.icon}
            title={t(card.title)}
            description={t(card.description)}
          />
        ))}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* What is CIMOC? */}
        <motion.div
          variants={fadeInUp}
          className="mt-[5rem] p-5 gap-5 flex bg-white rounded-lg justify-center"
        >
          <span className="w-2/3">
            <h2 className="text-3xl font-bold">{t("WhatisCIMOC")}</h2>
            <p className="text-xl text-gray-500 mt-5">
              {t("WhatisCIMOCDescription")}
            </p>
          </span>
          <motion.div animate={floatAnimation} className="p-5 bg-sContent rounded-lg">
            <img
              src={asserts.CIMO_LOGO}
              alt="logo"
            />
          </motion.div>
        </motion.div>

        {/* Who can participate? */}
        <motion.div
          variants={fadeInUp}
          className="mt-5 p-5 gap-5 bg-white flex justify-center rounded-lg"
        >
          <motion.div animate={floatAnimation} className="p-5 bg-tContent rounded-lg">
            <img src={asserts.Student} className="w-100" alt="logo" />
          </motion.div>
          <span className="w-2/3">
            <h2 className="text-3xl font-bold">{t("WhoCanParticipateInCIMOC")}</h2>
            <p className="text-xl text-gray-500 mt-5">
              {t("WhoCanParticipateInCIMOCDescription")}
            </p>
          </span>
        </motion.div>

        {/* Awards & Recognitions */}
        <motion.div
          variants={fadeInUp}
          className="mt-5 p-5 gap-5 bg-white flex justify-center rounded-lg"
        >
          <span className="w-2/3">
            <h2 className="text-3xl font-bold">{t("Awards&Recognitions")}</h2>
            <p className="text-xl text-gray-500 mt-5">
              {t("Awards&RecognitionsDescription")}
            </p>
          </span>
          <motion.div animate={floatAnimation} className="p-5 bg-pContent rounded-lg">
            <img src={asserts.Award} className="w-70" alt="logo" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePage

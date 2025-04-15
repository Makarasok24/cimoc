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
      title: "CIMOC Math Challenge",
      description: "CIMOC aims to provide Cambodian students with access to high-quality mathematics competitions which helps them improve their problem-solving and logical reasoning skills."
    },
    {
      id: 2,
      iconBg: "bg-[#fbe2e3]",
      icon: asserts.Brain, // Consider using a different icon if available
      title: "Challenge Students",
      description: "CIMOC challenges students with Olympiad-style math problems and encourages critical thinking to help students develop a deeper understanding of mathematics."
    },
    {
      id: 3,
      iconBg: "bg-[#8080ff]",
      icon: asserts.Support, // Consider using a different icon if available
      title: "Support Community",
      description: "CIMOC will allocate a portion of its funds to charity events, social initiatives, and donations to support underprivileged students by providing educational resources and financial aid to those in need."
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
        Our main objectives
      </h3>
      <div className="max-w-screen-2xl grid grid-cols-3 gap-10 mt-10">
        {cardData.map((card) => (
          <ObjectiveCard
            key={card.id}
            iconBg={card.iconBg}
            icon={card.icon}
            title={card.title}
            description={card.description}
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
            <h2 className="text-3xl font-bold">What is CIMOC?</h2>
            <p className="text-xl text-gray-500 mt-5">
              CIMOC (Cambodia International Mathematics Olympiad Competitions) is a
              non-profit math competition designed to provide Cambodian students
              with an opportunity to enhance their problem-solving and logical
              thinking skills.
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
            <h2 className="text-3xl font-bold">Who can participate in CIMOC?</h2>
            <p className="text-xl text-gray-500 mt-5">
              CIMOC is open to all Cambodian students from Grades 1 to 12, welcoming
              participants from both public and private schools across the country.
              We aim to foster a love for mathematics and provide equal opportunities
              for students of all backgrounds to challenge themselves and grow.
            </p>
          </span>
        </motion.div>

        {/* Awards & Recognitions */}
        <motion.div
          variants={fadeInUp}
          className="mt-5 p-5 gap-5 bg-white flex justify-center rounded-lg"
        >
          <span className="w-2/3">
            <h2 className="text-3xl font-bold">Awards & Recognitions?</h2>
            <p className="text-xl text-gray-500 mt-5">
              All students who compete in the final round will stand a chance to win
              Trophies, Gold Medals, Silver Medals, Bronze Medals, and Certificates.
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

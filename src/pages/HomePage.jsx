import React from 'react'
import ShiftingCountdown from '../components/ShiftingCountdown'
import { useTranslation } from "react-i18next";
import { asserts } from '../assets/assets';
import Announcement from '../components/Announcement';
import ObjectiveCard from '../components/ObjectiveCard';

const HomePage = () => {
  const { i18n, t } = useTranslation();
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
      {/* display what is CIMOC? */}
      <div className="mt-5 py-5">
        <h2 className='text-3xl font-semibold'>
          What is CIMOC?
        </h2>
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import ShiftingCountdown from '../components/ShiftingCountdown'
import { useTranslation } from "react-i18next";
import { asserts } from '../assets/assets';
import Announcement from '../components/Announcement';
const HomePage = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className='max-w-screen-2xl min-h-screen xl:px-[11rem] xl:mt-5'>
      <Announcement />
      <p className='text-3xl font-bold text-center mt-[5rem]'>
        {t("examDay")}
      </p>
      <ShiftingCountdown />
    </div>
  )
}

export default HomePage

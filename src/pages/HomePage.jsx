import React from 'react'
import ShiftingCountdown from '../components/ShiftingCountdown'
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className='max-w-screen-2xl min-h-screen xl:px-[11rem] xl:mt-5'>
      <p className='text-3xl font-bold'>
        <span>{t("examDay")}</span>
        <ShiftingCountdown />
      </p>
    </div>
  )
}

export default HomePage

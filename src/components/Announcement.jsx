import React from 'react';
import { useTranslation } from "react-i18next";
import { asserts } from '../assets/assets';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { motion } from "framer-motion";

const Announcement = () => {
    const { t } = useTranslation();

    const handleRegister = () => {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLScvgwR8eCtMqzzn8lYSMRb3q5gaHEf-UlSyEzZDnsD5NERVnQ/viewform?usp=sharing",
            "_blank"
        );
    };

    const handleContact = () => {
        window.open("https://t.me/cimoccambodia", "_blank");
    };

    return (
        <section className="mt-[5rem] px-4">
            <motion.h2
                className="text-3xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {t("Participants")}
            </motion.h2>

            <motion.div
                className="flex flex-col lg:flex-row items-center justify-center gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={asserts.RegisterPoster}
                    className="w-72 lg:w-80 rounded shadow-md"
                    alt="register"
                />

                <div className="flex flex-col gap-5 max-w-lg text-center lg:text-left">
                    <p className="text-xl">{t("announcing")}</p>

                    <p className="text-xl font-semibold text-primary">
                        {t("UpdatedDates")}
                    </p>

                    <ul className="text-lg flex flex-col gap-2">
                        <li>{t("Preliminary")}</li>
                        <li>{t("Registration")}</li>
                        <li>{t("FinalRound")}</li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                        <PrimaryButton onClick={handleRegister}>
                            {t("registerNow")}
                        </PrimaryButton>

                        <SecondaryButton onClick={handleContact}>
                            {t("contact")}
                        </SecondaryButton>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Announcement;

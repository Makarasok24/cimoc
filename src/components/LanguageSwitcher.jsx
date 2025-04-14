import { useState } from "react";
import { useTranslation } from "react-i18next";
import { asserts } from "../assets/assets";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    const languages = [
        { code: "kh", name: "ភាសាខ្មែរ", flag: asserts.KH },
        { code: "en", name: "English(US)", flag: asserts.EN},
    ];

    const currentLang = languages.find((lang) => lang.code === i18n.language);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-lg outline-1 outline-gray-100 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
                <img src={currentLang.flag} alt={currentLang.name} className="w-8  object-cover rounded-sm" />
                <span>{currentLang.name}</span>
            </button>

            {open && (
                <div className="absolute z-50 bg-white border mt-1 rounded-md shadow-md w-full">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-sm cursor-pointer"
                        >
                            <img src={lang.flag} alt={lang.name} className="w-8 object-cover rounded-sm" />
                            <span className={`font-${lang.code}`}>
                                {lang.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;

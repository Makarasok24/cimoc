import React from 'react'

const HeaderPage = ({ thumbnail, pageTitle, pageDescription,colorPageTitle,colorPageDescription,position }) => {
    return (
        <header
            className={`mb-10 xl:py-[10rem] xl:px-[11rem]`}
            style={{
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: `${position ? position : "center"}`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1 className={`text-5xl font-bold mb-4 ${colorPageTitle ? colorPageTitle : "text-white"}`}>
                {pageTitle}
            </h1>
            <p className={`text-xl ${colorPageDescription ? colorPageDescription : "text-white"}`}>
                {pageDescription}
            </p>
        </header>

    )
}

export default HeaderPage

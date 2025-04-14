import React from 'react'

const SecondaryButton = ({ children, onClick, disabled }) => {
    return (
        <button disabled={disabled}
            className="bg-none cursor-pointer border border-primary  px-3 py-2 w-full text-primary rounded tracking-wide hover:bg-primary hover:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default SecondaryButton

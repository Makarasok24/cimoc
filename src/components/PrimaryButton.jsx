import React from 'react'

const PrimaryButton = ({ children, onClick, disabled }) => {
    return (
        <button disabled={disabled}
            className="bg-primary cursor-pointer px-4 py-2 w-full hover:opacity-90 rounded text-white tracking-wide" onClick={onClick}>
            {children}
        </button>
    )
}

export default PrimaryButton

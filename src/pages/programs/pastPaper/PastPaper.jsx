import React from 'react'
import { asserts } from '../../../assets/assets'
import HeaderPage from '../../../components/HeaderPage'

const PastPaper = () => {
    return (
        <div className='max-w-screen-2xl mx-auto min-h-screen'>
            <HeaderPage
                thumbnail={asserts.SampleDoc}
                pageTitle={"Past Papers"}
                // colorPageTitle={"text-primary"}
                pageDescription={"Explore our collection of templates and forms for academic old documentation"}
            // colorPageDescription={"text-secondary"}
            />
            <div className="xl:px-[11rem]">
                <h3 className='text-3xl font-bold text-center'>
                    CIMOC 2025
                </h3>
                <div className="">
                    
                </div>
            </div>
        </div>
    )
}

export default PastPaper

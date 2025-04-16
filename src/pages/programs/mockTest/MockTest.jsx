import React from 'react'
import { asserts } from '../../../assets/assets'
import HeaderPage from '../../../components/HeaderPage'

const MockTest = () => {
    return (
        <div className='max-w-screen-2xl mx-auto min-h-screen'>
            <HeaderPage
                position={"bottom"}
                thumbnail={asserts.MOCK_Test}
                pageTitle={"Mock Test"}
                pageDescription={"Prepare with our practice exams featuring real exam formats and timed conditions"}
            />
        </div>
    )
}

export default MockTest

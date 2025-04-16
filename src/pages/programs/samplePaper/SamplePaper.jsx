import React from 'react'
import { asserts } from '../../../assets/assets'
import HeaderPage from '../../../components/HeaderPage'
import DocumentsCard from '../../../components/DocumentsCard'

const SamplePaper = () => {
    return (
        <div className='max-w-screen-2xl mx-auto min-h-screen '>
            <HeaderPage
                thumbnail={asserts.SampleDoc}
                pageTitle={"Sample Documents"}
                // colorPageTitle={"text-primary"}
                pageDescription={"Explore our collection of templates and forms for academic documentation"}
            // colorPageDescription={"text-secondary"}
            />
            <div className="xl:px-[11rem]">
                <h3 className='text-3xl font-bold text-center'>
                    CIMOC 2025
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <DocumentsCard
                        coverBook={asserts.SampleQ_1_2}
                        title={"Sample Question for grade 1-2"}
                        pdfUrl={"/pdf/Primary 3-4.pdf"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                    <DocumentsCard
                        coverBook={asserts.SampleQ_3_4}
                        title={"Sample Question for grade 3-4"}
                    />
                </div>
            </div>
        </div>
    )
}

export default SamplePaper

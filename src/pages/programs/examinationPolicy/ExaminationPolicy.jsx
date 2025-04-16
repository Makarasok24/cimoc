import React from 'react';
import { asserts } from '../../../assets/assets';
import HeaderPage from '../../../components/HeaderPage';

const ExaminationPolicy = () => {
    return (
        <div className="max-w-screen-2xl mx-auto min-h-screen ">
            <HeaderPage
                thumbnail={asserts.Examthumbnail}
                pageTitle={"Examination Policy"}
                colorPageTitle={"text-primary"}
                pageDescription={"Our comprehensive guidelines for fair and transparent examinations"}
                colorPageDescription={"text-gray-600"}
            />

            <div className="xl:px-[11rem]">
                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            General Guidelines
                        </h2>
                        <ul className="space-y-3 list-disc pl-5 text-gray-700">
                            <li>All students must arrive at least 15 minutes before the scheduled exam time</li>
                            <li>Valid student ID is required for admission to the examination hall</li>
                            <li>Electronic devices are strictly prohibited in the examination area</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Examination Conduct
                        </h2>
                        <ul className="space-y-3 list-disc pl-5 text-gray-700">
                            <li>Any form of academic dishonesty will result in disciplinary action</li>
                            <li>Students must follow all instructions from invigilators</li>
                            <li>Answer sheets must be returned before leaving the examination hall</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Grading Policy
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Grade
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Percentage
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            A
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            90-100%
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            Outstanding performance
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            B
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            80-89%
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            Above average performance
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ExaminationPolicy;
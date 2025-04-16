import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const DocumentsCard = ({ coverBook, title, pdfUrl }) => {
    return (
        <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 bg-white rounded-lg shadow-lg hover:scale-102 transition-all duration-200 cursor-pointer hover:bg-tContent items-center p-4"
        >
            <img src={coverBook} className="h-30 object-cover rounded-sm" alt={title} />
            <div className="flex flex-col justify-between">
                <span className="text-lg font-semibold">{title}</span>
                <div className="flex items-center gap-1 text-red-600 mt-1">
                    <FaFilePdf className="text-xl" />
                    <span className="text-sm font-medium">PDF</span>
                </div>
            </div>
        </a>
    );
};

export default DocumentsCard;

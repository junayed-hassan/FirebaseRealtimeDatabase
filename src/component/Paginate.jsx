/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Pagination({ totalItems, itemsPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            {/* Previous Button */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 border rounded ${
                    currentPage === 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600 border-transparent"
                }`}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {getPages().map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 border rounded ${
                        currentPage === page
                            ? "bg-blue-600 text-white border-transparent"
                            : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 border rounded ${
                    currentPage === totalPages
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600 border-transparent"
                }`}
            >
                Next
            </button>
        </div>
    );
}

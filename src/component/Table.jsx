/* eslint-disable react/prop-types */
import { useState } from "react";
import { paginateArray } from "../utils/helper";
import Pagination from "./Paginate";

export default function Table({
    tableContent,
    onAdd,
    onEdit,
    onDelete,
    perPage,
}) {
    const [searchText, setSearchText] = useState("");
    const [pageNo, setPageNo] = useState(0);

    // Extract table headers dynamically
    const tableHeaders =
        tableContent && tableContent.length > 0
            ? Object.keys(tableContent[0])
            : [];

    // Filter table data based on search input
    let filteredData =
        tableContent &&
        tableContent.filter((row) =>
            Object.values(row).some(
                (value) =>
                    value &&
                    value
                        .toString()
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            )
        );

    // Change filter data for pagination;
    if (perPage) {
        filteredData = paginateArray(filteredData, perPage);
        filteredData = filteredData[pageNo] ? filteredData[pageNo] : [];
    }

    // Handle paginate;
    const handleChange = (n) => {
        setPageNo(n - 1);
    };

    // Handle data type;
    const handleDataType = (data) => {
        if (typeof data === "string" || typeof data === "number") {
            return data;
        } else {
            return "[object]";
        }
    };

    // Render table rows dynamically
    const renderTableRows =
        tableContent &&
        filteredData.map((row, rowIndex) => (
            <tr
                key={rowIndex}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
                {tableContent &&
                    tableContent.length > 0 &&
                    tableHeaders.map((header, colIndex) => (
                        <td key={colIndex} className="px-3 py-3 border-b">
                            {handleDataType(row[header])}
                        </td>
                    ))}

                {/* Action Buttons */}
                {tableContent && tableContent.length > 0 && (
                    <td className="px-3 py-3 border-b w-32">
                        <button
                            onClick={() => onEdit(row)}
                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(row.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </td>
                )}
            </tr>
        ));

    return (
        <div className="relative overflow-x-auto sm:rounded-lg">
            {/* Search & Add Buttons */}
            <div className="pb-4 bg-white dark:bg-gray-900 flex items-center">
                <div className="relative">
                    <input
                        type="text"
                        id="table-search"
                        className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-64 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                </div>
                <button
                    onClick={onAdd}
                    className="bg-green-600 text-white ml-auto px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Add
                </button>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {tableContent &&
                            tableContent.length > 0 &&
                            tableHeaders.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-3 py-3 border-b"
                                    scope="col"
                                >
                                    {header}
                                </th>
                            ))}
                        {tableContent && tableContent.length > 0 && (
                            <th className="px-3 py-3 border-b w-32" scope="col">
                                Action
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>{renderTableRows}</tbody>
            </table>
            {filteredData.length === 0 && (
                <p className="py-3 text-center text-gray-400">No data found</p>
            )}
            {perPage && (
                <Pagination
                    totalItems={tableContent.length}
                    itemsPerPage={perPage}
                    onPageChange={handleChange}
                />
            )}
        </div>
    );
}

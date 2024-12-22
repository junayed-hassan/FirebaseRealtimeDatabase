function paginateArray(data, pageSize) {
    const paginatedData = [];
    for (let i = 0; i < data.length; i += pageSize) {
        paginatedData.push(data.slice(i, i + pageSize));
    }
    return paginatedData;
}

export { paginateArray };

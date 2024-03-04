import { useState } from "react";

function usePagination(defaultPageSize=10) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeSelected, setPageSizeSelected] = useState(defaultPageSize);

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const onPageSizeChange = (event) => {
        setPageSizeSelected(event.target.value);
        setCurrentPage(1);
    }

    return [currentPage, pageSizeSelected, onPageChange, onPageSizeChange];
}

export default usePagination;
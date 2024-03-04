import { useMemo, useState } from "react";
import CatalogueItem from './CatalogueItem.jsx';
import FilterButtons from './FilterButtons.jsx';
import {data} from './data.js';
import Pagination from "../../Pagination.jsx";
import usePagination from "../../Hooks/usePagination.jsx";


function Catalogue() {
    const [filteredResults, setFilteredResults] = useState(data);
    const [clickCategory, setClickCategory] = useState('all');
    const [currentPage, pageSizeSelected, onPageChange] = usePagination(3);
 

    function handleClick(clickCategory) {
        const filterTemp = [];
        data.forEach((item) => {
            item.searchTerm.forEach((term) => {
                if (term === clickCategory) {
                    filterTemp.push(item);
                }
            });
        });
        setFilteredResults(filterTemp);
        setClickCategory(clickCategory);
        onPageChange(1);
    }

    const currentProductList = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSizeSelected;
        const lastPageIndex = firstPageIndex + pageSizeSelected;

        return filteredResults.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredResults]);

    return (
        <>
            <div className="text-center mt-3">
                <h2 className="text-xl mb-5 font-semibold text-amber-800 capitalize">
                    Filter By {clickCategory}
                </h2>
                <div >
                    <FilterButtons
                        FilterButtons={data}
                        handleClick={handleClick}
                        className={clickCategory}
                    />
                </div>
            </div>
            <div className="columns-4 gap-8 mt-8">
                <CatalogueItem cardItems={currentProductList} />
            </div>
            {filteredResults && (
                <Pagination
                    totalCount={filteredResults?.length}
                    currentPage={currentPage}
                    pageSize={pageSizeSelected}
                    onPageChange={onPageChange}
                />
            )}
        </>
    )
}

export default Catalogue;


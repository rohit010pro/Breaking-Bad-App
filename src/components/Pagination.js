import React from 'react'

const Pagination = ({ pages, currentPage, setCurrentPage, isLoading }) => {

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }
    return (
        !isLoading &&
        <nav>
            <ul className="pagination">
                {
                    currentPage !== 1 &&
                    <li><span className="prev" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</span></li>
                }
                {
                    pages.map(number => (
                        <li key={number} id={number} onClick={handleClick}
                            className={currentPage === number ? "active" : ""}
                        >{number}</li>
                    ))
                }
                {
                    currentPage !== pages.length &&
                    <li><span className="next" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</span></li>
                }
            </ul>
        </nav>
    )
}

export default Pagination

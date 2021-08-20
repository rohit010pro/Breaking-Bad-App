import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isSearchShow, setSearchShow] = useState(false);
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <h1><Link to="/">Breaking Bad</Link></h1>
                        <div id="search-icon" className={isSearchShow ? "active" : ""}
                            onClick={() => setSearchShow(isSearchShow ? false : true)}>
                            <span id="search" className="material-icons">search</span>
                            <span id="close" className="material-icons">close</span>
                        </div>
                        <div id="search-wrapper" className={isSearchShow ? "show" : ""}>
                            <div id="search-box">
                                <input id="search-input" type="search" name="search" placeholder="Search Character" />
                                <button id="search-btn">
                                    <span className="material-icons">search</span>
                                </button>
                            </div>
                            <div id="search-result">
                                <div className="item">
                                    <div className="item-img"></div>
                                    <h5>Search Item 1</h5>
                                </div>
                                <div className="item">
                                    <div className="item-img"></div>
                                    <h5>Search Item 2</h5>
                                </div>
                                <div className="item">
                                    <div className="item-img"></div>
                                    <h5>Search Item 3</h5>
                                </div>
                                {/* <div className="no-search">
                                    <h5>No Search found</h5>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <button id="scrollToTopBtn" type="button">
                <span className="material-icons">arrow_upward</span>
            </button>
        </>
    );
}

export default Header;

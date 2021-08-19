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
                        <div id="search-icon" className={ isSearchShow ? "active" : ""}
                            onClick={() => setSearchShow(isSearchShow ? false : true)}>
                            <span id="search" className="material-icons">search</span> 
                            <span id="close" className="material-icons">close</span>
                        </div>
                        <div id="search-box" className={isSearchShow ? "show" : ""}>
                                <input id="search-input" type="search" name="search" placeholder="Search Character" />
                                <button id="search-btn">
                                    <span className="material-icons">search</span>
                                </button>
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

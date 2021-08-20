import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [isSearchShow, setSearchShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [isSearching, setSearching] = useState(true);

    useEffect(() => {
        const link = `https://breakingbadapi.com/api/characters?name=${searchTerm}`;

        fetch(link)
            .then((res) => res.json())
            .then((data) => {
                setSearchData(data);
                setSearching(false);
            });
    }, [searchTerm])

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
                                <input id="search-input" type="search" name="search" placeholder="Search Character"
                                    autoComplete="off"
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                                <button id="search-btn">
                                    <span className="material-icons">search</span>
                                </button>
                            </div>
                            {searchTerm.trim() &&
                                <div id="search-result">
                                    {
                                        isSearching ? (
                                            <div className="loader-box">
                                                <img src="/images/loader.gif" alt="loader" />
                                            </div>) : (
                                            searchData.length > 0 ?
                                                searchData.map(item => (
                                                    <div className="item" key={item.char_id}>
                                                        <div className="item-img">
                                                            <img src={item.img} alt={item.name} />
                                                        </div>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                )) :
                                                <div className="no-search">
                                                    <h5>No Search found</h5>
                                                </div>
                                        )
                                    }
                                </div>
                            }
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

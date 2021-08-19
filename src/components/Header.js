const Header = () => {
    return (
        <>
            <header>
                <div class="container">
                    <nav>
                        <h1>Breaking Bad</h1>
                        <div id="search-icon">
                            <span id="search" class="material-icons">search</span>
                            <span id="close" class="material-icons">close</span>
                        </div>
                        <div id="search-box">
                            <input id="search-input" type="search" name="search" placeholder="Search Character" />
                            <button id="search-btn">
                                <span class="material-icons">search</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <button id="scrollToTopBtn" type="button">
                <span class="material-icons">arrow_upward</span>
            </button>
        </>
    );
}

export default Header;

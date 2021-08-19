import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Characters = () => {
  const [isDataLoading, setDataLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
        setDataLoading(false);
      });
  }, []);


  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  }
  const previous = () => {
    setCurrentPage(currentPage - 1);
  }
  const next = () => {
    setCurrentPage(currentPage + 1);
  }

  const pages = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemPerPage); i++)
    pages.push(i);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = pages.map(number => (
    <li key={number} id={number} onClick={handleClick}
      className={currentPage === number ? "active" : ""}
    >{number}</li>
  ));

  return (
    <div className="container">
      {
        isDataLoading ?
          <h1>Loading...</h1>
          :
          <div className="character-wrapper">
            {
              currentItems.length > 0 ?
                currentItems.map(character => (
                  <div className="character" key={character.char_id}>
                    <div className="char-img">
                      <Link to={'character/' + character.char_id}>
                        <img src={character.img} alt={character.name} />
                      </Link>
                    </div>
                    <div className="char-bio">
                      <h3>
                        <Link to={'character/' + character.char_id}>{character.name}</Link>
                      </h3>
                      <div><b>Occupation: </b>{character.occupation.map(work => (work + ", "))}</div>
                      <div><b>DOB: </b>{character.birthday}</div>
                      <div><b>Status: </b>{character.status}</div>
                    </div>
                  </div>
                ))
                : "No Characters Found"
            }
          </div>
      }

      <ul className="pagination">
        {currentPage !== 1 && <li><span class="prev" onClick={previous}>&laquo;</span></li>}
        {pageNumbers}
        {currentPage !== pages.length && <li><span class="next" onClick={next}>&raquo;</span></li>}
      </ul>
    </div>
  )
}

export default Characters

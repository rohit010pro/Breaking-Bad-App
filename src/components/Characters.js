import { Link } from "react-router-dom";
import { useState } from "react";

const Characters = (props) => {
  const characters = props.characters;
  const isDataLoading = props.loading;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
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
          <div className="characters">
            {
              currentItems.length > 0 ?
                currentItems.map(character => (
                  <div className="character" key={character.char_id}>
                    <div className="char-img">
                      <img src={character.img} alt={character.name} />
                    </div>
                    <div className="char-bio">
                      <Link to={'character/' + character.char_id}><h3>{character.name}</h3></Link>
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
      <ul className="pagination">{pageNumbers}</ul>
    </div>
  )
}

export default Characters

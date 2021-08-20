import { Link } from "react-router-dom";

const Characters = ({ characters, isLoading }) => {
  return (
    <main>
      <div className="container">
        {
          isLoading ?
            <div className="loader-box">
              <img src="/images/loader.gif" alt="loader" />
            </div>
            :
            <div className="character-wrapper">
              {
                characters.length > 0 ?
                  characters.map(character => (
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
      </div>
    </main>
  )
}

export default Characters

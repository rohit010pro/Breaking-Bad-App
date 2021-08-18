const Characters = (props) => {
  const characters = props.characters;

  return (
    <div className="container">
      <div className="characters">
        {
          characters.length > 0 ?
            characters.map(character => (
              <div className="character" key={character.char_id}>
                <div className="char-img">
                  <img src={character.img} alt={character.name} />
                </div>
                <div className="char-bio">
                  <h3>{character.name}</h3>
                  <div><b>Occupation: </b>{character.occupation.map(work => (work + ", "))}</div>
                  <div><b>DOB: </b>{character.birthday}</div>
                  <div><b>Status: </b>{character.status}</div>
                </div>
              </div>
            ))
            : "No Characters Found"
        }
      </div>
    </div>
  )
}

export default Characters

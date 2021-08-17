import Character from "./Character";

const Characters = (props) => {
  const characters = props.characters;

  return (
    <div className="container">
      <div className="characters">
        {
          characters.length > 0
            ? characters.map((character) => (
              <Character character={character} />
            ))
            : "No Characters Found"
        }
      </div>
    </div>
  )
}

export default Characters

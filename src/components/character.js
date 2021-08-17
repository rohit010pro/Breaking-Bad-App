const Character = (props) => {
    const character = props.character;

    return (
        <div className="character">
            <div className="char-img">
                <img src={character.img} alt={character.name} />
            </div>
            <div className="char-bio">
                <h3>{character.name}</h3>
                <p>{character.birthday}</p>
                <p>{character.occupation}</p>
            </div>
        </div>
    )
}

export default Character

const Character = (props) => {
    const character = props.character;

    return (
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
    )
}

export default Character

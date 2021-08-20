import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Character = () => {
    const { charId } = useParams();
    const [character, setCharacter] = useState(null);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const userLink = `https://breakingbadapi.com/api/characters/${charId}`;
        fetch(userLink)
            .then((res) => res.json())
            .then((data) => setCharacter(data[0]));
    });

    useEffect(() => {
        if (character === null) return;
        const quotesLink = `https://breakingbadapi.com/api/quote?author=${character.name.replaceAll(" ","+")}`;
        fetch(quotesLink)
            .then((res) => res.json())
            .then((data) => setQuotes(data));
    }, [character]);

    return (
        <main>
            <div className="container">
                {
                character === null ? (
                    <div className="loader-box">
                        <h1> Loading... </h1>
                    </div>
                ) : (
                    <div className="profile">
                        <div className="profile-img">
                            <img src={character.img} alt={character.name} />
                        </div>
                        <div className="profile-bio">
                            <h1> {`${character.name} (${character.nickname})`} </h1>
                            <div>
                                <b> DOB: </b> {character.birthday}
                            </div>
                            <div>
                                <b> Occupation: </b> {character.occupation}
                            </div>
                            <div>
                                <b> Status: </b> {character.status}
                            </div>
                            <div>
                                <b> Portrays: </b> {character.portrayed}
                            </div>
                            <div>
                                <b> Season: </b>
                                {character.name !== undefined &&
                                    character.appearance.join(", ")}
                            </div>
                        </div>
                        <div className="quotes">   
                            {quotes != null && (
                                <>
                                    <h1> {`${character.name}'s Quotes`} </h1>
                                    <ul>
                                        
                                        {quotes.map((quote) => (
                                            <li key={quote.quote_id}> {quote.quote} </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Character;

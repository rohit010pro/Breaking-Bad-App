import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Character = () => {

    const { charId } = useParams();
    const [character, setCharacter] = useState({});
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const userLink = `https://breakingbadapi.com/api/characters/${charId}`;
        fetch(userLink)
            .then(res => res.json())
            .then(data => setCharacter(data[0]));
    });

    useEffect(() => {
        if (character.name === undefined) return;
        const quotesLink = `https://breakingbadapi.com/api/quote?author=${character.name.replaceAll(" ", "+")}`;
        fetch(quotesLink)
            .then(res => res.json())
            .then(data => setQuotes(data));

    }, [character]);

    return (
        <main>
            <div class="container">
                <div class="profile">
                    <div class="profile-img">
                        <img src={character.img} alt={character.name} />
                    </div>
                    <div class="profile-bio">
                        <h1>{`${character.name} (${character.nickname})`}</h1>
                        <div><b>DOB: </b> {character.birthday} </div>
                        <div><b>Occupation: </b> {character.occupation} </div>
                        <div><b>Status: </b> {character.status} </div>
                        <div><b>Portrays: </b> {character.portrayed} </div>
                        <div><b>Season: </b> {character.name !== undefined && character.appearance.join(", ")} </div>
                    </div>
                    <div class="quotes">
                        {
                            character.name !== undefined ?
                                <>
                                    <h1>{`${character.name}'s Quotes`}</h1>
                                    <ul>
                                        {quotes.map(quote => <li key={quote.quote_id}>{quote.quote}</li>)}
                                    </ul>
                                </>
                                : "No Quote Found"
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Character

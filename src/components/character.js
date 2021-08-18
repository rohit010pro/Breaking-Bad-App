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
        <div className="container">
            <h1>{character.name} </h1>
            <p>{character.birthday} </p>
            <p>{character.occupation} </p>
            <p>{character.status} </p>
            <p>{character.nickname} </p>
            <p>{character.appearance} </p>
            <p>{character.portrayed} </p>
            <br /><br />
            {
                character.name !== undefined ?
                    <div>
                        <h2>{`${character.name}'s Quotes`}</h2>
                        <ul>
                            {quotes.map(quote => <li key={quote.quote_id}>{quote.quote}</li>)}
                        </ul>
                    </div>
                    : "No Quote Found"
            }
        </div>
    )
}

export default Character

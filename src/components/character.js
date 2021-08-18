import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Character = () => {

    const { charId } = useParams();
    const [character, setCharacter] = useState({});
    const [quotes, setQuotes] = useState([]);

    const userLink = `https://breakingbadapi.com/api/characters/${charId}`;
    useEffect(() => {
        fetch(userLink)
        .then(res => res.json())
        .then(data => setCharacter(data[0]));
    }, []);

    const quotesLink = `https://breakingbadapi.com/api/quote?author=${character.name.replaceAll(" ", "+")}`;
    useEffect(() => {
        
        fetch(quotesLink)
        .then(res => res.json())
        .then(data => setQuotes(data));
    }, [character]);

    return(
        <div>
            <h1>{ character.name } </h1>
            <p>{ character.birthday } </p>
            <p>{ character.occupation } </p>
            <p>{ character.status } </p>
            <p>{ character.nickname } </p>
            <p>{ character.appearance } </p>
            <p>{ character.portrayed } </p>
            <ul>
                {quotes}
            </ul>
        </div>
    )
}

export default Character

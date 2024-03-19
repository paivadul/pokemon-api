import axios from "axios";
import { useEffect, useState } from "react";

const PokeApi = () => {
    const [pokeList, setPokeList] = useState([]);
    const [butClick, setButClick] = useState(false);

    useEffect(() => {
        if (butClick) {
            axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then(response => setPokeList(response.data.results.map(pokemon => pokemon.name)))
                .catch(console.error);
        }
    }, [butClick]);

    
    const clickPok = () => setButClick(true);

    return (
        <div className="Pokeapi">
            <button onClick={clickPok}>Find Names</button>
            <ul>
                {pokeList.map((pokName, i) => (<li key={i}>{pokName}</li>))}
            </ul>
        </div>
    )
}

export default PokeApi;
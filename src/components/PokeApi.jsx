import React from "react";
import { useState } from "react";
import { AllPokemonApi } from '../services/getPokeapi';

const PokeApi = () => {
    const [list, setList] = useState([]);

    const handleListPokemon = async () => {
        try {
            const response = await AllPokemonApi();
            console.log("response", response.data.results);
            setList(response.data.results);
            //   console.log("response", response.data.results);
            } catch (error) {
                console.error(error.message);
            }
    }

    return (
        < div className="Pokeapi" >
            <button onClick={() => handleListPokemon()}>Fetch Pokemon</button>
            {
                list.map((data, i) => {
                    return (
                    <ul>
                        <li key={i}>{data.name}</li>
                    </ul>
                    )
                })
            }
        </div>
    );
}

export default PokeApi;
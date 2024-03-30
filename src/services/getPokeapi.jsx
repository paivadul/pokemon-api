import axios from "axios";

export const AllPokemonApi = async () => {
    const rpta = await axios.get("https://pokeapi.co/api/v2/pokemon")
    return rpta;
};
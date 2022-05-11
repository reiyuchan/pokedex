import { PokemonClient, PokemonSprites } from "pokenode-ts";
import { idGen, displayPokemon } from "./generatepokemon";

const pokemon = async () => {
  const api = new PokemonClient();
  await api
    .getPokemonById(idGen())
    .then((data) => data)
    .then((pokemon) =>
      displayPokemon(pokemon.name, pokemon.sprites.front_default)
    )
    .catch((error) => console.error(error));
};

export { pokemon };

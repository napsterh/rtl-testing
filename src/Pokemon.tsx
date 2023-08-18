import axios from "axios";
import React, { useState } from "react";
import CustomInput from "./CustomInput";

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

type Ability = {
   ability: {
      name: string;
      url: string;
   };
   is_hidden: boolean;
   slot: number;
   };

   function Pokemon() {
   const [pokemonName, setPokemonName] = useState('');
   const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
   const [error, setError] = useState<Error | null>(null);

   async function handleFetch(event: React.MouseEvent) {
      try {
         const result = await axios.get(`${pokemonApiUrl}/pokemon/${pokemonName}`);
         setPokemonAbilities(result.data.abilities);
         setError(null); // Clear any previous errors
      } catch (err) {
         if (err instanceof Error) {
         setPokemonAbilities([]);
         setError(err);
         } else {
         const unknownError = new Error('Error desconocido');
         setPokemonAbilities([]);
         setError(unknownError);
         }
      }
   }

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setPokemonName(event.target.value);
   }

   return (
      <div>
         <CustomInput value={pokemonName} onChange={handleChange}>
         Pokemon Name:
         </CustomInput>
         <button type="button" onClick={handleFetch}>
         Fetch Abilities
         </button>
         {error && <span>Something went wrong...</span>}
         <ul>
         {pokemonAbilities.map((ability) => (
            <li key={ability.ability.name}>
               <a href={ability.ability.url}>{ability.ability.name}</a>
            </li>
         ))}
         </ul>
      </div>
   );
}

export default Pokemon;
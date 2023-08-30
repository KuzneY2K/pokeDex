import { pokemonService } from "../services/PokemonService.js";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { WildPokemon } from "./WildPokemon.js";
import { SandboxPokemon } from "./SandboxPokemon.js";
import { Account } from "../models/Account.js";

export class PokemonController {
    constructor() {
    }

    async setActivePokemon(pokeName) {
        try {
            await pokemonService.setActivePokemon(pokeName)
            pokemonService.drawActive()
        } catch (error) {
            alert('ERROR!!! YOU FAINTED!')
            console.log(error)
        }
    }
}
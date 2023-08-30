import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonService } from "../services/PokemonService.js";

export class WildPokemon {
    constructor() {
        console.log('Wild pokemon are lurking in the area.')
        this.drawPokemon()
    }

    async findWildPokemon() {
        try {
            await pokemonService.findWildPokemon()
        } catch (error) {
            alert('ERROR')
            console.log(error)
        }
    }

    async drawPokemon() {
        try {
            await this.findWildPokemon()
            let template = ''
            AppState.pokemon.forEach(p => template += Pokemon.WildPokemonTemplate(p))
            let listContainer = document.getElementById('pokemon-list-container')
            listContainer.innerHTML = template
        } catch (error) {
            alert('ERROR!! YOU WERE ATTACKED AND BLACKED OUT!')
            console.log('')
        }

    }
}
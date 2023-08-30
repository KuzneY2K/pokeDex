import { PokemonController } from "../controllers/PokemonController.js"
import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000,
})



class PokemonService {
    constructor() {

    }

    async findWildPokemon() {
        let res = await pokeApi.get('pokemon?limit=1281')
        let pokeMen = res.data.results
        let newPokemen = pokeMen.map(pokemon => new Pokemon(pokemon))
        AppState.pokemon = newPokemen
    }

    async setActivePokemon(pokeName) {
        let singleRes = await pokeApi.get(`pokemon/${pokeName}`)
        AppState.activePokemon = new Pokemon(singleRes.data)
        // let res = api.post(`api/pokemon/`, AppState.activePokemon)
        console.log(singleRes.data.img)
        // console.log(res.data)

        // SEND SPRITES TO SANDBOX API

    }

    drawActive() {
        let activeTemp = ''
        document.getElementById('pokemon-container').innerHTML = activeTemp += AppState.activePokemon.ActiveTemplate
    }
}

export const pokemonService = new PokemonService()
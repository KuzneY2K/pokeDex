import { AppState } from "../AppState.js"

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.types = data.types || []
        this.img = data.sprites || []

        // ^^ DO THE SAME FOR SPRITES / IMG
    }


    get ActiveTemplate() {
        return `
                    <div class="active-container m-0 p-0 d-flex flex-column">
                    <h3 class="badge grad-2 fs-2 animate__animated animate__rollIn shadow border border-3 border-dark">${this.name}</h3>
                    </div>
        `
    }

    get PokemonTypes() {

    }


    static WildPokemonTemplate(p) {
        return `
            <h3 class="badge grad-1 fs-2 animate__animated animate__bounceInRight shadow border border-3 border-dark" onclick="app.PokemonController.setActivePokemon('${p.name}')">${p.name}</h3>
        `
    }
}
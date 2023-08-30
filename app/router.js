import { PokemonController } from "./controllers/PokemonController.js";
import { HomeView } from "./views/HomeView.js";
import { WildPokemon } from "./controllers/WildPokemon.js";
import { SandboxPokemon } from "./controllers/SandboxPokemon.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokemonController, WildPokemon, SandboxPokemon],
    view: HomeView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */
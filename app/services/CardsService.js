import { AppState } from "../AppState.js"
import { CardsController } from "../controllers/CardsController.js"
import { api } from "./AxiosService.js";
import { Card } from "../models/Card.js";
import { getFormData } from "../utils/FormHandler.js";

const cardsApi = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    timeout: 60000,
    headers: {
        authorization: `08e532df-5e7e-4e27-ab36-b046a8e1a45a`
    }
})

class CardsService {
    constructor() {
        console.log('What to do with all these cards...');
    }

    async getCards() {
        try {
            let res = await cardsApi.get('cards')
            let cards = res.data.data
            console.log(cards)
            let myCards = cards.map(card => new Card(card))
            AppState.cards = myCards
            console.log(AppState.cards)
        } catch (error) {
            console.log(error);
            alert('THE DOG ATE THE CARDS!!!')
        }
    }
}

export const cardsService = new CardsService()
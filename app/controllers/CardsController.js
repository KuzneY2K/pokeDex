import { api } from "../services/AxiosService.js"
import { cardsService } from "../services/CardsService.js"
import { AppState } from "../AppState.js"
import { Card } from "../models/Card.js"
import { getFormData } from "../utils/FormHandler.js"

export class CardsController {
    constructor() {
        console.log('There a ton of pokemon cards laying around...')
    }

    drawCards() {
        let template = ''
        let cardsContainer = document.getElementById('cards-container')
        AppState.cards.forEach(card => template += card.CardTemplate)
        cardsContainer.innerHTML = template
    }

    async getCards() {
        try {
            await cardsService.getCards()
            this.drawCards()
        } catch (error) {
            console.log(error);
            alert('THE WIND BLEW MY CARDS INTO THE TOILET!!')
        }
    }
}
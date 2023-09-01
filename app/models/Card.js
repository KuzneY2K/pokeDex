export class Card {
    constructor(data) {
        this.name = data.name
        this.image = data.images.small || data.images.large
    }

    get CardTemplate() {
        return `<div class="d-flex flex-column">
        <h3 class="mt-3 badge grad-1 fs-4">${this.name}</h3>
        <img src=${this.image} class="animate__animated animate__bounceIn pokeCard" height="300vh mt-3">
        </div>`
    }
}
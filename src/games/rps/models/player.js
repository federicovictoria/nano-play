
export class Player {

    listCards = [];

    constructor( estrategy) {
        this.estrategy = estrategy; 
    }

    addCard(card) {
        this.listCards.push(card);
    }

    getCards() {
        return this.listCards;
    }

    removeCard(card) {
        const index = this.listCards.indexOf(card);
        if (index > -1) {
            this.listCards.splice(index, 1);
        }
    }

    deleteCards() {
        this.listCards = [];
    }

}
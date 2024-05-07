const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    display() {
        console.log(`${this.suit} ${this.rank}`)
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (let suit of SUITS) {
            for (let rank of RANKS) {
                this.cards.push(new Card(suit, rank))
            }
        }
        this.shuffle()
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards] = [this.cards[j], this.cards[i]]
        }
    }

    takeCard(){
        return this.cards.pop()
    }
}

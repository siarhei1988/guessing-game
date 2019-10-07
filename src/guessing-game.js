class GuessingGame {
    min = null;
    max = null;
    guessedNumber = null;
    
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guessedNumber = null;
    }

    guess() {
        return this.reduceRange();
    }

    lower() {
        this.max = this.reduceRange();
    }

    greater() {
        this.min = this.reduceRange();
    }

    reduceRange(){
        return Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;

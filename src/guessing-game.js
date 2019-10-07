class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.guessedNumber = null;
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

    reduceRange() {
        return Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;

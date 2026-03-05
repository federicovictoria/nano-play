
export class Score {
    static instance = null;

    userScore = 0;
    botScore = 0;

    constructor() {
        if (Score.instance) {
            return Score.instance;
        }
        return Score.instance = this;
    
    }

    gerUserScore() {
        return this.userScore;
    }

    getBotScore() {
        return this.botScore;
    }

    setUserScore(points) {
        this.userScore = points;
    }

    setBotScore(points) {
        this.botScore = points;
    }

    resetScore() {
        this.userScore = 0;
        this.botScore = 0;
    }
}
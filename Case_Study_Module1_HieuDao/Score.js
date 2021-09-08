class Score {
    constructor(_x, _y, _score, _font, _color) {
        this.x = _x
        this.y = _y
        this.score = _score
        this.font = _font
        this.color = _color
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getScore() {
        return this.score
    }

    getFont() {
        return this.font
    }

    getColor() {
        return this.color
    }

    setX(x) {
        return this.x = x
    }

    setY(y) {
        return this.y = y
    }

    setScore(score) {
        return this.score = score
    }

    setFont(font) {
        return this.font = font
    }

    setColor(color) {
        return this.color = color
    }



    //Draw Score
    drawScore(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color
        ctx.fillText("Score: " + this.score, this.x, this.y)
    }
}
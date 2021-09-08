class Paddle {
    constructor(_x, _y, _height, _width, _color) {
        this.x = _x
        this.y = _y
        this.height = _height
        this.width = _width
        this.color = _color
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getHeight() {
        return this.height
    }

    getWidth() {
        return this.width
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

    setHeight(height) {
        return this.height = height
    }

    setWidth(width) {
        return this.width = width
    }

    setColor(color) {
        return this.color = color
    }

    //Draw Paddle
    drawPaddle(ctx) {
        //Paddle
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()

    }


}
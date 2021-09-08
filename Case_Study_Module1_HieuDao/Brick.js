class Brick {
    constructor(_x, _y, _height, _width, _color, _status) {
        this.x = _x
        this.y = _y
        this.height = _height
        this.width = _width
        this.color = _color
        this.status = _status
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

    getStatus() {
        return this.status
    }

    setHeight(height) {
        return this.height = height
    }

    setX(x) {
        return this.x = x
    }

    setY(y) {
        return this.y = y
    }

    setWidth(width) {
        return this.width = width
    }

    setColor(color) {
        return this.color = color
    }

    setStatus(status) {
        return this.status = status
    }

    //Draw Bricks
    drawBricks(ctx) {
        ctx.beginPath()
        ctx.rect(this.x,this.y, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }


}
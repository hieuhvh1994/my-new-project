class Ball {
    constructor(_x,_y, _radius, _dx, _dy, _color) {
        this.x = _x
        this.y = _y
        this.radius = _radius
        this.dx = _dx
        this.dy = _dy
        this.color = _color
    }


    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getRadius() {
        return this.radius
    }

    getDx() {
        return this.dx
    }

    getDy() {
        return this.dy
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

    setRadius(radius) {
        return this.radius = radius
    }

    setDx(dx) {
        return this.dx = dx
    }

    setDy(dy) {
        return this.dy = dy
    }

    setColor(color) {
        return this.color = color
    }


    //Draw Ball
    drawBall(ctx) {
        //Ball
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        ctx.fillStyle= this.color
        ctx.fill()
        ctx.closePath()
    }
}
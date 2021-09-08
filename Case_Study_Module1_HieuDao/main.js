//Variables
//Canvas draw
let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")


//Ball
//Initial position
let x=canvas.width/2
let y=canvas.height-30

//Start moving ball when pressed left or right button
let startGame = false


//Speed Movement
let dx = 2
let dy = -2

//Radius
let ballRadius = 10




//Paddle
//Height and Width Paddle
let paddleHeight = 10
let paddleWidth = 75

//Initial position
let paddleX = (canvas.width-paddleWidth) / 2

// Moving paddle
let rightPressed = false
let leftPressed = false
//When key is pressing
document.addEventListener("keydown", keyDownHandler, false)
//When key is released
document.addEventListener("keyup", keyUpHandler, false)





//Brick
//Brick Information
let brickRowCount = 3
let brickColumnCount = 5
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10 //Padding between bricks
let brickOffsetTop = 30 //Make the bricks padding from top the canvas
let brickOffsetLeft = 30 //Make the bricks padding from left the canvas

//Create Bricks
let bricks = []
//create columns
for (let c =0; c<brickColumnCount; c++) {
    bricks[c] = []
    //Create rows and add position and the status available of each brick
    for (let r=0; r<brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1}
    }
}






//Score
let score = 0




//Main program
//Ball
//Draw Ball
function drawBall() {
    //Ball
    ctx.beginPath()
    ctx.arc(x,y,ballRadius,0,Math.PI*2)
    ctx.fillStyle="#0095DD"
    ctx.fill()
    ctx.closePath()


}

//Paddle
//Draw Paddle
function drawPaddle() {
    //Paddle
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()

}

//Moving paddle button pressed
function keyDownHandler(e) {
    switch (e.keyCode) {
        case 39:
            rightPressed = true
            startGame = true
            break

        case 37:
            leftPressed = true
            startGame = true
            break

    }

}


//Moving paddle button released
function keyUpHandler(e) {
    switch (e.keyCode) {
        case 39:
            rightPressed = false
            break

        case 37:
            leftPressed = false
            break

    }
}


//Bricks
//Draw Bricks
function drawBricks() {
    for (let c=0; c<brickColumnCount;c++) {
        for (let r=0; r<brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                let brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft
                let brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath()
                ctx.rect(brickX,brickY, brickWidth, brickHeight)
                ctx.fillStyle = "#0095DD"
                ctx.fill()
                ctx.closePath()
            }

        }
    }
}

//Collision Detecting
function collisionDetection() {
    for (let c=0; c<brickColumnCount;c++) {
        for (let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r]
            // When the ball touch the brick
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy
                    b.status = 0
                    score++
                }
            }

        }
    }

}

//Score
//Draw Score
function drawScore() {
    ctx.font = "16px Arial"
    ctx.fillStyle = "red"
    ctx.fillText("Score: " + score, 8, 20)
}



//Main draw
//Clear the canvas then draw the new position of ball after every 10 milliseconds
function draw() {
    //Clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //Draw objects
    drawBall()
    drawPaddle()
    drawBricks()
    collisionDetection()
    drawScore()

    //Make the ball move
    if (startGame === true) {
        x+=dx
        y+=dy
    }


    //Make the ball cannot go outside the canvas
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }

    //When the ball hit the paddle
    else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy
            }
            // END GAME command
            else {
                alert("GAME OVER")
                document.location.reload()
                clearInterval(interval)
            }

    }


    //Make the paddle move and not go outside of the canvas
    if(rightPressed === true) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed === true) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }



}

//Make the function draw run every 10 milliseconds
let interval = setInterval(draw, 10)





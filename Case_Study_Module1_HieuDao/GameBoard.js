class GameBoard {
    constructor(_startGame) {
        this.startGame = _startGame
    }

    getStartGame() {
        return this.startGame
    }

    setStartGame(startGame) {
        return this.startGame = startGame
    }

    start() {
        //Create Canvas
        let canvas = document.getElementById("myCanvas")
        let ctx = canvas.getContext("2d")

        //Create Objects
        let ball = new Ball(canvas.width / 2, canvas.height - 30, 10, 2, -2, "#0095DD")

        let paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 10, 75, "#0095DD")

        let score = new Score(8, 20, 0, "16px Arial", "red")

        let startGame = this.startGame

        // Moving paddle
        let rightPressed = false
        let leftPressed = false
        //When key is pressing
        document.addEventListener("keydown", keyDownHandler, false)
        //When key is released
        document.addEventListener("keyup", keyUpHandler, false)

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


        //Bricks Information
        let brickRowCount = 3
        let brickColumnCount = 5
        let brickPadding = 10 //Padding between bricks
        let brickOffsetTop = 30 //Make the bricks padding from top the canvas
        let brickOffsetLeft = 30 //Make the bricks padding from left the canvas

        //Create Bricks
        let bricks = []
        //create columns
        for (let c = 0; c < brickColumnCount; c++) {
            bricks[c] = []
            //Create rows and create brick objects
            for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r] = new Brick(0, 0, 20, 75, "#0095DD", 1)
            }
        }

        //Bricks left
        let bricksLeft = brickRowCount * brickColumnCount
        console.log(bricksLeft)

        //Collision Detecting
        function collisionDetection() {
            for (let c=0; c<brickColumnCount;c++) {
                for (let r=0; r<brickRowCount; r++) {
                    let br = bricks[c][r]
                    // When the ball touch the brick
                    if (br.getStatus() === 1) {
                        if (ball.x > br.x && ball.x < br.x + br.width && ball.y > br.y && ball.y < br.y + br.height) {
                            ball.setDy(-ball.dy)
                            br.setStatus(0)
                            score.score += 1
                            bricksLeft -= 1
                        }
                    }

                }
            }

        }


        //Main draw
        //Clear the canvas then draw the new position of ball after every 10 milliseconds
        function draw() {
            //Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            //Draw Objects
            ball.drawBall(ctx)
            paddle.drawPaddle(ctx)

            //Draw Bricks
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    if (bricks[c][r].status === 1) {
                        let brickX = (c * (bricks[c][r].width + brickPadding)) + brickOffsetLeft
                        let brickY = (r * (bricks[c][r].height + brickPadding)) + brickOffsetTop
                        bricks[c][r].setX(brickX)
                        bricks[c][r].setY(brickY)
                        bricks[c][r].drawBricks(ctx)
                    }

                }

            }


            console.log(bricksLeft)

            //Check Collision
            collisionDetection()

            //Draw new Score
            score.drawScore(ctx)


            //Make the ball move
            if (startGame === true) {
                ball.x += ball.dx
                ball.y += ball.dy
            }

            //Make the ball cannot go outside the canvas
            if(ball.x + ball.dx > canvas.width-ball.radius || ball.x + ball.dx < ball.radius) {
                ball.setDx(-ball.dx)
            }
            if(ball.y + ball.dy < ball.radius) {
                ball.setDy(-ball.dy)
            }

            //When the ball hit the paddle
            else if (ball.y + ball.dy > canvas.height - ball.radius) {
                if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                    ball.setDy(-ball.dy)
                }
                // END GAME command
                 else {
                    alert("GAME OVER")
                    document.location.reload()
                    clearInterval(interval)
                }

            }

            //Check the bricks left and alert WIN GAME
            if (bricksLeft === 0){
                alert("YOU WON!!" + "\n" +"Score: " + score.getScore())
                document.location.reload()
                clearInterval(interval)
            }


            //Make the paddle move and not go outside of the canvas
            if(rightPressed === true) {
                paddle.x += 7;
                if (paddle.x + paddle.width > canvas.width){
                    paddle.x = canvas.width - paddle.width;
                }
            }
            else if(leftPressed === true) {
               paddle.x -= 7;
                if (paddle.x < 0){
                    paddle.x = 0;
                }
            }


        }

        //Make the function draw run every 10 milliseconds
        let interval = setInterval(draw, 10)
    }


}

//Run the program
let gameBoard = new GameBoard(false)
gameBoard.start()

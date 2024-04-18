let lastRenderTime=0
let gameOver = false
const gameBoard=document.querySelector('#game-board')

const main=(currentTime)=>{
    if (gameOver){
        return
    }

    window.requestAnimationFrame(main)  //逐帧动画，重新绘制前调用callback
   
    let secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    if (secondsSinceLastRender< 1/SNAKE_SPEED){
        return 
    }
    lastRenderTime=currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

const update = () => {
    gameOver = isGameOver()
    updateSnake()
    updateFood()
}

const draw = () => {
    gameBoard.innerHTML=''   // eliminate all child elements
    drawSnake()
    drawFood()
}

const isGameOver = () => {
    return isOutOfBoard(snakeBody[0]) || onSnake(snakeBody.slice(1), snakeBody[0]) 
}


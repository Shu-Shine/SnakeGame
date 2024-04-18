const SNAKE_SPEED =5   // can't declared again in other js files
const snakeBody=[
    {x:11,y:11},   // head
    {x:11,y:10},
    {x:11,y:9}
]

const updateSnake=()=>{
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] }
    }
    const snakeDirection = getInputDirection()
    snakeBody[0].x += snakeDirection.x    // right is bigger
    snakeBody[0].y += snakeDirection.y    // down is bigger
    
}
const drawSnake=()=>{
    for(let i = 0; i < snakeBody.length; i++){
        const element=snakeBody[i]
        const snakeElement=document.createElement('div')  // create an HTML element
        snakeElement.style.gridRowStart = element.y    // show the element at row y, grid from 1-21
        snakeElement.style.gridColumnStart = element.x   // show the element ar column x, grid from 1-21
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    };
}

const onSnake=(array, position) => {
    return array.some(e => e.x === position.x && e.y === position.y )  // arrow function not forget return

}

const expandSnake = (number) => {
    for(let i=0; i< number; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
}







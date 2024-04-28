let food = {x:5, y:5}
const EXPANSION_RATE =1  // how many grids added one time


const updateFood = () => {
    if (onSnake(snakeBody, food)) {
        expandSnake(EXPANSION_RATE)
        getRandomFoodPosition()
    }
}

const getRandomFoodPosition = () => {
    while(onSnake(snakeBody, food)){
        food.x = Math.ceil(Math.random()*GRID_SIZE)
        food.y = Math.ceil(Math.random()*GRID_SIZE)   
    } 
}

const drawFood = () => {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement); 
}

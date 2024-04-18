const GRID_SIZE =21

const isOutOfBoard = (position) => {
    return position.x > GRID_SIZE || position.x < 1 || position.y > GRID_SIZE || position.y < 1
}

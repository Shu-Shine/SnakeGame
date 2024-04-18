let inputDirection = {x:0, y:1}  // take care of the initialization!
let lastInputDirection = Object.assign({}, inputDirection)

window.addEventListener('keydown', event=>{   // event=KeyBoardEvent
    if(event.key === 'ArrowUp' && lastInputDirection.x !== 0) {inputDirection= {x:0, y:-1}}   // key value, indicates which key is down
    else if(event.key === 'ArrowDown' && lastInputDirection.x !== 0) {inputDirection= {x:0, y:1}}
    else if(event.key === 'ArrowLeft' && lastInputDirection.y !== 0) {inputDirection= {x:-1, y:0}}
    else if(event.key === 'ArrowRight' && lastInputDirection.y !== 0) {inputDirection= {x:1, y:0}}
    // else{alert('Please enter the right direction key.')}    // ?
})

const getInputDirection=()=>{
    lastInputDirection = inputDirection
    return inputDirection
}









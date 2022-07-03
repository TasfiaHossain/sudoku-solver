// returns the first element that matches from the selector value

const puzzleBoard = document.querySelector('#puzzle')

const solveButton = document.querySelector('#solve-button')

// 9x9 square --> 81 squares needed 
const squares = 81

// create the squares we want to put in the puzzle

for (let i = 0; i < squares; i++) {
    //create an input each time you loop
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number') //only allows number in this input 
    inputElement.setAttribute('min', '0')
    inputElement.setAttribute('max', '9')

    puzzleBoard.appendChild(inputElement)

}


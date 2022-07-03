// returns the first element that matches from the selector value

const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');

// 9x9 square --> 81 squares needed 
const squares = 81;

//array for submissions
const submissions = [];


// create the squares we want to put in the puzzle
for (let i = 0; i < squares; i++) {
    //create an input each time you loop
    const inputElement = document.createElement('input');
    
    //only allows number in this input - create max and min
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', '0');
    inputElement.setAttribute('max', '9');

    puzzleBoard.appendChild(inputElement);

    // get all the values we can get in the input and then change them into an array
    const joinValues = () => {
        
        const inputs = document.querySelectorAll('input');

        // for each input --> get the input and if a value exists in the input, put it in an array 

        input.array.forEach(input => {

        //.push --> adds one or more elements to the end of an array and returns the new length of the array

            if(input.value) {
                submissions.push(input.value);
            }
           
            else {
                submissions.push('.'); // '.' symbolizes an empty square 
            }
            
        }); //input.array.forEach

    }//joinValues

    console.log(submissions)

}//for loop


//calling the api
//https://rapidapi.com/sosier/api/solve-sudoku
const solve = () => {
    const axios = require("axios");

    const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
    },
    data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}



solveButton.addEventListener('click', joinValues)

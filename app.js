
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
    inputElement.setAttribute('min', '1');
    inputElement.setAttribute('max', '9');

    puzzleBoard.appendChild(inputElement);
}

// get all the values we can get in the input and then change them into an array
const joinValues = () => {
    
    const inputs = document.querySelectorAll('input');

    // for each input --> get the input and if a value exists in the input, put it in an array 

    inputs.forEach(input => {

    //.push --> adds one or more elements to the end of an array and returns the new length of the array

        if(input.value) {
            submissions.push(input.value);
        }
        
        else {
            submissions.push('.'); // '.' symbolizes an empty square 
        }
        
    }); //input.array.forEach

    console.log(submissions)

}//joinValues



const solve = () => {

    joinValues();
    const data = submissions.join('')
    console.log('data', data)
   
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '2ab7a712a0msh8f8d6ec16910a13p1c1f5fjsne62f1f4c9e78',
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        
        data: {
            puzzle: data
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

solveButton.addEventListener('click', solve)

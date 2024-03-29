
// returns the first element that matches from the selector value
const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');
const solutionDisplay = document.querySelector('#solution');

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

    //adding colors 
    if ( 
        ((i%9==0 || i%9==1 || i%9==2) && i<21) || 
        ((i%9==6 || i%9==7 || i%9==8) && i<27) || 
        ((i%9==3 || i%9==4 || i%9==5) && (i > 27 && i < 53)) || 
        ((i%9==0 || i%9==1 || i%9==2) && i>53) || 
        ((i%9==6 || i%9==7 || i%9==8) && i>53)
    ) {
        //odd-section is the class
        inputElement.classList.add('odd-section')
    }

    puzzleBoard.appendChild(inputElement);
} //for loop 

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


const populateValues = (isSolvable, solution) => {

   const inputs = document.querySelectorAll('input')

   //if the game is solvable and there is a solution, then:
   if(isSolvable && solution){
        //we will get each input value
        inputs.forEach((input, i) => {
            input.value = solution[i]
        })

        //.innerHTML --> returns the text in the second layer
        solutionDisplay.innerHTML = 'This is the solution'
   
    }//if

   else { 
        solutionDisplay.innerHTML = 'This is not solvable'
   }

}//populate values

// API 
const solve = () => {
    joinValues();
    const data = submissions.join('')
    console.log('data', data)

    //will trigger backend
    fetch('http://localhost:8800/solve', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        
    })  .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error)
        })
}

//allows for the solve button to work in the event that it is clicked
solveButton.addEventListener('click', solve)

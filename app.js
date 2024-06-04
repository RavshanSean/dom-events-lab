/*-------------------------------- Constants --------------------------------*/

let num1 = ''
let num2 = ''
let total = 0
let firstNumDone = false
let operator



/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/










const display = document.querySelectorAll('.display')[0];
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  

  const calculator = document.querySelector('#calculator');


  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
       if(firstNumDone !==true){
        num1 += event.target.innerText
        display.innerText = num1
       }else{
        num2 += event.target.innerText
        display.innerText = num2
       }
       console.log(num1, num2);
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '+') {
        firstNumDone = true;
        operator = '+';
      // Do something with this operator
    }
    if(event.target.innerText === '-') {
        firstNumDone = true;
        operator = '-';
     }
    if(event.target.innerText === '*') {
        firstNumDone = true;
        operator = '*';
     }
     if(event.target.innerText === '/') {
        firstNumDone = true;
        operator = '/';
     }
     if(event.target.innerText === '=') {
        if(operator ==='+') {
            total = parseInt(num1) + parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        }else  if(operator ==='-') {
            total = parseInt(num1) - parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        }//here
        else if(operator === '*') {
            total = parseInt(num1) * parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''

        }else if(operator === '/') {
            total = parseInt(num1) / parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        }
        display.innerText = total
        total = 0;
        firstNumDone = false;
    }})
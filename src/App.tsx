import React from 'react';
import './App.css';

function App() {

  let numberInput: number = 100;
  let divideByFirstNumber : number = 3;
  let divideBySecondNumber : number = 5;
  let outputOne : string = 'People';
  let outputTwo : string = 'Power';
  let msgInvalid : string = 'Provided value may not valid.';
  
  /**
   * function to check number is divisible by 3 or 5 or both or not and print
   * @param numberLimit 
   */
   const checkNumberDivisibleBy = (numberLimit : number) =>  {
    try {
      for(let i = 1; i <= numberLimit; i++ ) {
        if(i && divideByFirstNumber && divideBySecondNumber) {
            if(divisibleBy(i, divideByFirstNumber) && divisibleBy(i, divideBySecondNumber)) {
                console.log(outputOne+ ' ' + outputTwo);
            } else if(divisibleBy(i, divideByFirstNumber)) {
                console.log(outputOne);
            } else if(divisibleBy(i, divideBySecondNumber)) {
                console.log(outputTwo);
            } else {
                console.log(i);
            }
        } else {
            console.log(msgInvalid);
        }
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  
  /**
   * function to check number is divisible by given number
   * @param currentNum 
   * @param divideBy 
   * @returns boolean
   */
  const divisibleBy = (currentNum : number, divideBy: number) => {
      if(currentNum % divideBy == 0) {
          return true;
      }
      return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Please open Console to view the output.</p>
        <p>Press F12 or right click here and select Inspect</p>
      </header>
      { checkNumberDivisibleBy(numberInput) }
    </div>
  );
}

export default App;

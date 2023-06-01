let inputString = "";
let operator = "";
let n1 = 0;
let n2 = 0;
let matchResult = inputString.match(/\d+/)
let result = 0;

function add(n1, n2){
    result = n1+n2;
    return result;
}
function subtract(n1, n2){
    result = n1-n2;
    return result;
}
function multiply(n1, n2){
    result = n1*n2;
    return result;
}
function divide(n1, n2){
    result = n1/n2;
    return result;
}

function operate(n1, n2, operator){
    if(operator == "+"){
        add(n1, n2)
    }
    else if(operator == "-"){
        subtract(n1, n2)
    }
    else if(operator == "*"){
        multiply(n1, n2)
    }
    else if(operator == "/"){
        divide(n1, n2)
    }
}

function updateResult(){
    document.getElementById("result").innerHTML = result;
}

function createButtons(amount) {
    const buttonsDisplay = document.getElementById('buttons');
  
    // Create clear button
    const clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'clearButton');
    clearButton.textContent = 'Clear';
    clearButton.style.cssText =
      'width: calc((100% / 4) * 2 - 10px); height: 50px; margin: 5px;border-radius: 5px;cursor: pointer;';
    clearButton.addEventListener('click', () => {
        n1, n2, result = 0;
        inputString, operator = "";
        updateResult();
    })
    buttonsDisplay.appendChild(clearButton);
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent = 'Delete';
    deleteButton.style.cssText =
     'width: calc((100% / 4) * 2 - 10px); height: 50px; margin: 5px 5px 20px 5px; border-radius: 5px;cursor: pointer;';
    buttonsDisplay.appendChild(deleteButton);
  
    const values = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+']

    // Create grid of buttons
    for (let i = 0; i < amount; i++) {
    const btn = document.createElement('button');
    btn.textContent = values[i];
    btn.setAttribute('id', btn.textContent);
    btn.style.cssText =
     'border-radius: 10px; width: calc((100% / 4) - 10px); height: 50px; margin: 5px 5px 10px 5px;cursor: pointer;';
    btn.addEventListener('click', () => {
        inputString += btn.textContent;
        if(btn.textContent == "+" ||btn.textContent == "/" ||btn.textContent == "*" ||btn.textContent == "-"){

        if(n1 == 0){
        n1 = parseInt(inputString.slice(0, inputString.length-1));
        }

        else if(n1 != 0){
        n2 = parseInt(inputString.slice(0, inputString.length-1));
        }

        operator = inputString.replace(/\d+/, '');
        inputString = ""
        }

        else if(btn.textContent == "="){
        n2 = parseInt(inputString.slice(0, inputString.length-1));
        inputString = ""
        operate(n1, n2, operator);
        if(result > 0){
            n1 = result;
        }
        updateResult();
        }
    });
      buttonsDisplay.appendChild(btn);
    }
  }

  /* add a statement that leads to a result if
  person clicks on an operator multiple times*/

  /*update the display so user can see their inputs in bottom side, and outputs in upper side*/
  createButtons(16);
  updateResult();
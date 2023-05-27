let inputString = "";
let operator = "";
let n1 = 0;
let n2 = 0;
let matchResult = inputString.match(/\d+/)

function add(n1, n2){
    return n1 += n2;
}
function subtract(n1, n2){
    return n1 -= n2;
}
function multiply(n1, n2){
    return n1 *= n2;
}
function divide(n1, n2){
    return n1 /= n2;
}

function addValues (number){
    
}

function operate(n1, operator, n2){
    if(operator === "+"){
        add(n1, n2)
    }
    else if(operator === "-"){
        subtract(n1, n2)
    }
    else if(operator === "*"){
        multiply(n1, n2)
    }
    else if(operator === "-"){
        divide(n1, n2)
    }
}
function createButtons(amount) {
    const buttonsDisplay = document.getElementById('buttons');
  
    // Create clear button
    const clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'clearButton');
    clearButton.textContent = 'Clear';
    clearButton.style.cssText =
      'width: calc((100% / 4) * 2 - 10px); height: 50px; margin: 5px;border-radius: 5px;cursor: pointer;';
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
    const button = document.createElement('button');
    button.textContent = values[i];
    button.setAttribute('id', button.textContent);
    button.style.cssText =
        'border: 1px solid black; border-radius: 10px; width: calc((100% / 4) - 10px); height: 50px; margin: 5px 5px 10px 5px;cursor: pointer;';
    button.addEventListener('click', () => {
        inputString += button.textContent;
        if(button.textContent == "+" ||button.textContent == "/" ||button.textContent == "*" ||button.textContent == "-") {
        if(n1 == 0){
        n1 = parseInt(inputString.slice(0, length-1));
        }
        else if(n1 != 0){
        n2 = parseInt(inputString.slice(0, length-1));
        }
        operator = inputString.replace(/\d+/, '');
        inputString = ""
        if(n1 != 0 && n2 != 0){
            operate()
        }
        }
        console.log(n1)
        console.log(n2)
        console.log(operator)
    });
      buttonsDisplay.appendChild(button);
    }
  }
  
  createButtons(16);
  
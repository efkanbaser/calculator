let operator = "";
let n1 = 0;
let n2 = 0;

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
      'width: calc((100% / 4) * 2 - 10px); height: 50px; margin: 5px;border-radius: 5px;';
    buttonsDisplay.appendChild(clearButton);
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent = 'Delete';
    deleteButton.style.cssText =
      'width: calc((100% / 4) * 2 - 10px); height: 50px; margin: 5px 5px 20px 5px; border-radius: 5px;';
    buttonsDisplay.appendChild(deleteButton);
  
    // Create grid of buttons
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('button');
      box.setAttribute('class', 'circle');
      box.style.cssText =
        'border: 1px solid black; border-radius: 10px; width: calc((100% / 4) - 10px); height: 50px; margin: 5px 5px 10px 5px;';
      buttonsDisplay.appendChild(box);
    }
  }
  
  createButtons(16);
  
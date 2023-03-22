let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current");

    // Colors used
const dark = "rgb(44, 44, 44)";
const white = "rgb(255, 255, 255)";
const gray = "rgb(175, 178, 184)";
const orange = "rgb(255, 165, 0)";

    // Animation mock
function animationParameters(bgColor,fontColor){
    return [
            { backgroundColor: bgColor, color: fontColor },
            { backgroundColor: fontColor, color: bgColor },
            { backgroundColor: bgColor, color: fontColor },
            ];
}
    // Animation for each button
const numberButtonsAnimation = animationParameters(dark,white);
const specialButtonsAnimation = animationParameters(gray,white);
const eqButtonAnimation = animationParameters(orange,white);
const timing = {
    duration: 250,
    iterations: 1,
};

    // List of math operations
const operationalButtons = {
    "÷":3,
    "×":7,
    "+":11,
    "-":15,
};
    
let operationMarked = null;  // Operator selected
let firstNumber = true; // After an operator
let cachedNumber = null;  // Store the number in the display
let cachedOperator = null;
let negative = false;  // Negative number
let limitNotReached = ()=> current.innerHTML.replaceAll(",","").replaceAll(".","").replaceAll("-","").length < 9;
let operationSelected = ()=>operationalButtons[operationMarked];
let unmarkOperationalButton = ()=>{
    ind = operationSelected();
    buttons[ind].style.backgroundColor = orange;
    buttons[ind].style.color = white;
    operationMarked = null;
};
let insertCommas = ()=>{
    current.innerHTML = current.innerHTML.replaceAll("," , "");
    intlen = current.innerHTML.includes(".") ? current.innerHTML.indexOf(".") : current.innerHTML.length;
    commas = Math.floor((intlen-1-negative)/3);
    for(i=0; i<commas; i++){
        current.innerHTML = current.innerHTML.slice(0,intlen-3*(i+1)) + "," + current.innerHTML.slice(intlen-3*(i+1));
    }
}
let calculate = ()=>{
    switch (cachedOperator['operation']){
        case '÷':
            if (!cachedOperator['value']==0){
                cachedNumber = cachedNumber/cachedOperator['value'];
            }else{
                cachedNumber = 'Error';
                firstNumber = true;
            }
            break;
        case '×':
            cachedNumber = cachedNumber*cachedOperator['value'];
            break;
        case '+':
            cachedNumber = cachedNumber+cachedOperator['value'];
            break;
        case '-':
            cachedNumber = cachedNumber-cachedOperator['value'];
            break;
    }
    current.innerHTML = cachedNumber;
    cachedNumber !== 'Error' ? insertCommas() : null;
    console.log(cachedNumber)
}

    // Number buttons functionality 
for (i of [4,5,6,8,9,10,12,13,14,16]){
    buttons[i].addEventListener("click", function(){
            // Insert numbers in the display
        if(firstNumber){
            current.innerHTML = 0;
            firstNumber = false;
            current.innerHTML = (negative?"-":"") + this.innerHTML;
        }else{
            limitNotReached() ? current.innerHTML += this.innerHTML : null;
        }

            // Insert commas at every 3 integer numbers
        insertCommas();
        // current.innerHTML = current.innerHTML.replaceAll("," , "");
        // intlen = current.innerHTML.includes(".") ? current.innerHTML.indexOf(".") : current.innerHTML.length;
        // commas = Math.floor((intlen-1-negative)/3);
        // for(i=0; i<commas; i++){
        //     current.innerHTML = current.innerHTML.slice(0,intlen-3*(i+1)) + "," + current.innerHTML.slice(intlen-3*(i+1));
        // }

            // Animation of the buttons
        this.animate(numberButtonsAnimation, timing);
        this.innerHTML !== "0" ? buttons[0].innerHTML = "C" : null;
    });
}

    // Dot button functionality 
buttons[17].addEventListener("click", function(){
        // Set display to zero after an operation
    if(firstNumber){
        current.innerHTML = (negative?"-0":"0");
        firstNumber = false;
    }
        // Addition to the floating point
    if(limitNotReached()){
        !current.innerHTML.includes(".") ? current.innerHTML += "." : null;
    }
        // Animation of the button 
    this.animate(numberButtonsAnimation,timing);
    buttons[0].innerHTML = "C";
})

    // Plus/Minus button functionality
buttons[1].addEventListener("click", function(){
        // Set display to zero after an operation
    firstNumber ? current.innerHTML = (negative?"-0":"0") : null;
        // Add or delete minus sign
    current.innerHTML = negative ? current.innerHTML.slice(1): "-" + current.innerHTML;
        // Change the negative option
    negative = !negative;
        // Animation of the button
    this.animate(specialButtonsAnimation, timing);
})

    // Math Operators buttons 
for(i of [3,7,11,15]){
    buttons[i].addEventListener("click", function(){
            // Set current number in stage
        cachedNumber = parseFloat(current.innerHTML.replaceAll(",",""));
        firstNumber = true;
        negative = false;
        if(operationMarked){
            ind = operationSelected();
                // Animation when the clicked button was already selected
            if(ind == operationalButtons[this.innerHTML]){
                this.animate(eqButtonAnimation.slice(0,2),timing);
            } else {
                unmarkOperationalButton();
            }
        }
            // Mark current clicked button and save it
        this.style.backgroundColor = white;
        this.style.color = orange;

        // cachedOperator = {'operation': this.innerHTML, 'value': parseFloat(current.innerHTML.replaceAll(",",""))};

        operationMarked = this.innerHTML;

    });
}


    // AC button 
buttons[0].addEventListener("click",function() { 

    if(this.innerHTML=="AC"){
            // Unmark math operational button
        operationMarked ? unmarkOperationalButton() : null;
        // cachedNumber = null;
        cachedOperator = null;
    }else{
        this.innerHTML = "AC";
        firstNumber = true;
        // cachedOperator ? cachedNumber = null : null;
    }
    cachedOperator ? cachedNumber = null : null;
    current.innerHTML = 0;
    negative = false;

        // Animation
    this.animate(specialButtonsAnimation, timing);
});


    // Equal button 
buttons[18].addEventListener('click',function(){
    if(operationMarked){
        cachedOperator = {'operation': operationMarked, 'value': parseFloat(current.innerHTML.replaceAll(",",""))};
        calculate();
        unmarkOperationalButton();
    }else{
        cachedOperator ? calculate() : null;
    }
    console.log(cachedNumber)

        // Animation
    this.animate(eqButtonAnimation, timing);
})
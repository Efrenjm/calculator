let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current")

const dark = "rgb(44, 44, 44)";
const white = "rgb(255, 255, 255)";
const gray = "rgb(175, 178, 184)";
const orange = "rgb(255, 165, 0)";

function animationParameters(bgColor,fontColor){
    return [
            { backgroundColor: bgColor, color: fontColor },
            { backgroundColor: fontColor, color: bgColor },
            { backgroundColor: bgColor, color: fontColor },
            ];
}

const numberButtonsAnimation = animationParameters(dark,white);
const specialButtonsAnimation = animationParameters(gray,white);
const eqButtonAnimation = animationParameters(orange,white);
const timing = {
    duration: 250,
    iterations: 1,
};

    // Special buttons animation
for (i=0; i<3; i++){
    buttons[i].addEventListener("click", function(){
        this.animate(specialButtonsAnimation, timing);
    });
}

    // Number buttons 
for (i of [4,5,6,8,9,10,12,13,14,16]){
    buttons[i].addEventListener("click", function(){
        current.innerHTML = current.innerHTML == "0" ? this.innerHTML : current.innerHTML + this.innerHTML;
        this.animate(numberButtonsAnimation, timing);
        buttons[0].innerHTML = "C"
    });
}

    // Dot functionality 
buttons[17].addEventListener("click", function(){
    !current.innerHTML.includes(".") ? current.innerHTML = current.innerHTML + "." : null;
    this.animate(numberButtonsAnimation,timing)
    buttons[0].innerHTML = "C"
})

const operationalButtons = {
    "÷":3,
    "×":7,
    "+":11,
    "-":15,
}
let operationMarked = null

    // Operational buttons 
for(i of [3,7,11,15]){
    buttons[i].addEventListener("click", function(){
        if(operationMarked){
            ind = operationalButtons[operationMarked];
            if(ind == operationalButtons[this.innerHTML]){
                this.animate(eqButtonAnimation.slice(0,2),timing)
            }
            buttons[ind].style.backgroundColor = orange;
            buttons[ind].style.color = white;
        }
        console.log(operationalButtons[operationMarked])
        this.style.backgroundColor = white;
        this.style.color = orange;
        operationMarked = this.innerHTML;
        buttons[0].innerHTML = "C";

    });
}


    // AC button 
buttons[0].addEventListener("click",function() { 
    if(operationMarked){
        if ( this.innerHTML === "C" && parseFloat(current.innerHTML)!==0){ 
            current.innerHTML = 0;
            this.innerHTML = "AC";
        }else{ 
            ind = operationalButtons[operationMarked];
            buttons[ind].style.backgroundColor = orange;
            buttons[ind].style.color = white;
            operationMarked = null;
            parseInt(current.innerHTML)==0 ? buttons[0].innerHTML="AC" : null;
        }
    }else{
        current.innerHTML = 0;
        this.innerHTML = "AC";
    }
    
});

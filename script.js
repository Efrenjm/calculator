let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current")

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
}
    
let operationMarked = null;  // Math operator selected
let cachedNumber = null;  // Store the number in the display
let negative = false;  // Negative number

    // Special buttons animation
// for (i=0; i<3; i++){
//     buttons[i].addEventListener("click", function(){
//         this.animate(specialButtonsAnimation, timing);
//     });
// }

    // Number buttons functionality 
for (i of [4,5,6,8,9,10,12,13,14,16]){
    buttons[i].addEventListener("click", function(){
        // if (negative){
        //     current.innerHTML = current.innerHTML == "-0" ? "-"+this.innerHTML : current.innerHTML + this.innerHTML;
        // }else{
        //     current.innerHTML = current.innerHTML == "0" ? this.innerHTML : current.innerHTML + this.innerHTML;
        //     // console.log(current.innerHTML.length)
        // }


            // Add numbers in the display
        zero = negative ? "-0":"0";
        current.innerHTML = current.innerHTML == zero ? (negative?"-":"")+this.innerHTML : current.innerHTML + this.innerHTML;
            
            // Insert commas at every 3 integer numbers
        current.innerHTML = current.innerHTML.replaceAll("," , "");
        intlen = current.innerHTML.includes(".")? current.innerHTML.indexOf(".") : current.innerHTML.length;
        commas = Math.floor((intlen-1-negative)/3);
        for(i=0; i<commas; i++){
            current.innerHTML = current.innerHTML.slice(0,intlen-3*(i+1)) + "," + current.innerHTML.slice(intlen-3*(i+1)) 
        }

            // Animation of the buttons
        this.animate(numberButtonsAnimation, timing);
        this.innerHTML !== "0" ? buttons[0].innerHTML = "C" : null;
    });
}

    // Dot button functionality 
buttons[17].addEventListener("click", function(){
        // Addition to the floating point
    current.innerHTML.includes(".") ? null : current.innerHTML = current.innerHTML + ".";
        
        // Animation of the button 
    this.animate(numberButtonsAnimation,timing);
    buttons[0].innerHTML = "C";
})

    // Plus/Minus button functionality
buttons[1].addEventListener("click", function(){
        // Add or delete minus sign
    current.innerHTML = negative ? current.innerHTML.slice(1): "-" + current.innerHTML;
    
        // Invert bool value
    negative = !negative

        // Animation of the button
    this.animate(specialButtonsAnimation, timing);

})


operationSelected = ()=>operationalButtons[operationMarked]
function unmarkOperationalButton(ind){
    buttons[ind].style.backgroundColor = orange;
    buttons[ind].style.color = white;
}

    // Operational buttons 
for(i of [3,7,11,15]){
    buttons[i].addEventListener("click", function(){
            // Set current number in stage
        cachedNumber = current.innerHTML

        if(operationMarked){
            ind = operationSelected()
                // Animation when the clicked button was already selected
            if(ind == operationalButtons[this.innerHTML]){
                this.animate(eqButtonAnimation.slice(0,2),timing)
            } else {
                unmarkOperationalButton(ind);
            }
        }
            // Mark current clicked button and save it
        this.style.backgroundColor = white;
        this.style.color = orange;
        operationMarked = this.innerHTML;

    });
}


    // AC button 
buttons[0].addEventListener("click",function() { 
    if(operationMarked){
            // Reset current display
        // if ( this.innerHTML === "C" && current.innerHTML !== "0" ){ 
        if (current.innerHTML !== "0" ){ 
            current.innerHTML = 0;
            this.innerHTML = "AC";
        } else { 
            ind = operationSelected();
            unmarkOperationalButton(ind);
            operationMarked = null;
            parseInt(current.innerHTML)==0 ? buttons[0].innerHTML="AC" : null;
        }
    } else {
        current.innerHTML = 0;
        this.innerHTML = "AC";
    }
    cachedNumber = null;
    negative=false;
    
});

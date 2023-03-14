let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current")


// let addNumber = (number) => current.innerHTML = current.innerHTML == "0" ? number : current.innerHTML + String(number)
// buttons[12].addEventListener("click", () => addNumber(1));
// buttons[13].addEventListener("click", () => addNumber(2));
// buttons[14].addEventListener("click", () => addNumber(3));
// buttons[8].addEventListener("click", () => addNumber(4));
// buttons[9].addEventListener("click", () => addNumber(5));
// buttons[10].addEventListener("click", () => addNumber(6));
// buttons[4].addEventListener("click", () => addNumber(7));
// buttons[5].addEventListener("click", () => addNumber(8));
// buttons[6].addEventListener("click", () => addNumber(9));
// buttons[16].addEventListener("click", () => addNumber(0));

    // AC button 
buttons[0].addEventListener("click",() => current.innerHTML = 0);


// const newspaperSpinning = [
//     { transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out" },
//     { transition: "background-color 0.15s ease-in-out" },
//   ];
  
// const newspaperTiming = {
//     duration: 2000,
//     iterations: 1,
//   };




    // Numbers buttons 
for (i of [4,5,6,8,9,10,12,13,14,16]){
    buttons[i].addEventListener("click", function(){
        current.innerHTML = current.innerHTML == "0" ? this.innerHTML : current.innerHTML + this.innerHTML
        this.style.animation = ""
        this.style.animation = "example 0.3s"
        // this.animate(newspaperSpinning,newspaperTiming)
        
        // this.style.backgroundColor = "white"
        // this.style.color = "rgb(45,45,45)"

        // this.style.backgroundColor = "rgb(45,45,45)"
        // this.style.color = "white"
    });
}

    // Dot functionality 
buttons[17].addEventListener("click", () => !current.innerHTML.includes(".") ? current.innerHTML = current.innerHTML + ".":null)

    // Operational buttons 
for(i of [3,7,11,15]){
    buttons[i].addEventListener("click", function(){
        this.style.backgroundColor = "white";
        this.style.color = "orange";
        // if(){

        // }
    });
}

// buttons[4].addEventListener("click",()=>{
//     number = 7;
//     current.innerHTML == 0 ? current.innerHTML = number : current.innerHTML + String(number)
// })

// buttons[17].addEventListener("click", ()=>{
//     console.log(current.innerHTML)
//     current.innerHTML = String(current.value) + String(0)
// })
// buttons[15].addEventListener("click", ()=>{
//     current.innerHTML = String(current.value) + String(3)
// })

let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current")

    // AC button 
buttons[0].addEventListener("click",() => current.innerHTML = 0);

    // Numbers buttons 
for (i of [4,5,6,8,9,10,12,13,14,16]){
    buttons[i].addEventListener("click", function(){
        current.innerHTML = current.innerHTML == "0" ? this.innerHTML : current.innerHTML + this.innerHTML
        this.style.animation = "example"
        // console.log(this.parentNode.replaceChild(this.cloneNode(true),this))
        this.classList.remove("button");
        this.offsetWidth;
        this.classList.add("button");
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

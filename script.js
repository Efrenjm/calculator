let buttons = document.getElementsByClassName("button");
let current = document.getElementById("current")


let addNumber = (number) => current.innerHTML = current.innerHTML == "0" ? number : current.innerHTML + String(number)


buttons[0].addEventListener("click",()=>{
    current.innerHTML = 0
})
buttons[12].addEventListener("click", () => addNumber(1))
buttons[13].addEventListener("click", () => addNumber(2))
buttons[14].addEventListener("click", () => addNumber(3))
buttons[8].addEventListener("click", () => addNumber(4))
buttons[9].addEventListener("click", () => addNumber(5))
buttons[10].addEventListener("click", () => addNumber(6))
buttons[4].addEventListener("click", () => addNumber(7))
buttons[5].addEventListener("click", () => addNumber(8))
buttons[6].addEventListener("click", () => addNumber(9))

// buttons[4].addEventListener("click",()=>{
//     number = 7;
//     current.innerHTML == 0 ? current.innerHTML = number : current.innerHTML + String(number)
// })

buttons[17].addEventListener("click", ()=>{
    console.log(current.innerHTML)
    current.innerHTML = String(current.value) + String(0)
})
buttons[15].addEventListener("click", ()=>{
    current.innerHTML = String(current.value) + String(3)
})

const mainContainer = document.querySelector(".container-main")
const thanksContainer = document.querySelector(".thankyou")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rates1 = document.querySelector("btn1")
const rates2 = document.querySelector("btn2")
const rates3 = document.querySelector("btn3")
const rates4 = document.querySelector("btn4")
const rates5 = document.querySelector("btn5")

submitButton.addEventListener("click", () =>{

    thanksContainer.classList.remove("hidden1")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () =>{
    thanksContainer.classList.add("hidden1")
    mainContainer.style.display = "block"
})




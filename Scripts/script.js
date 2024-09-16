"use client";

const boxes = document.body.getElementsByClassName("box")
const len = document.body.getElementsByClassName("box").length
const btn = document.body.getElementsByClassName("btn")

for (let i = 0; i <= len; i++) {
    boxes[i].style.borderColor = "green"  
    boxes[i].style.backgroundColor = "lightblue"
}


btn[0].addEventListener("click", function() {
    alert("Clicked!")
})

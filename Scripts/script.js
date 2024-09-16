"use client";

const len = document.body.getElementsByClassName("box").length
const btn = document.body.getElementsByClassName("btn")

document.body.querySelectorAll(".box").forEach(e=>{
   e.style.borderColor = "green"
   e.style.backgroundColor = "lightblue"
})


btn[0].addEventListener("click", function() {
    alert("Clicked!")
})
"use strict";

const btn = document.getElementsByClassName("btn")

document.body.querySelectorAll(".box").forEach(e=>{
   e.style.borderColor = "green";
   e.style.boxShadow = '10px 10px 5px #888888'
   e.style.backgroundColor = "lightblue";
})


btn[0].addEventListener("click", function() {
    btn[0].onclick = function(interval) {
        setInterval(() => {
            location.href = "../Templates/orderpage.html";
        }, interval);
    }
})
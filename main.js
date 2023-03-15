let messSpan = document.querySelector(".mess-with-me");
messSpan.style.fontSize = "40px";

let para = document.querySelector(".mess-with-me-paragraph");
para.style.background = "green";

let hiddendino = document.querySelector("#hide-me");
hiddendino.remove();

let firstDino = document.querySelector("#triceratops");
firstDino.style.width = "324px";

messSpan.addEventListener("click", function () {
  messSpan.style.color = "orange";
});

firstDino.addEventListener("click", function () {
  firstDino.style.border = "10px solid red";
});

let fea = document.querySelector("#feathers");
fea.addEventListener("click", function () {
  fea.style.opacity = "0.5";
});

let toggle = document.querySelector("#toggle");
let row = document.querySelector("#row");
toggle.addEventListener("click", function() {
    if(row.style.background ===""){
        row.style.background ="blue"
    } else if (row.style.background == "blue"){
        row.style.background = ""
    }

});

let biggify = document.querySelector("#biggify");
biggify.addEventListener("mousemove", function () {
  biggify.style.width = "200px";
});

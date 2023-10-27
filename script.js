let rainbow = document.querySelector(".rainbow");
let color = document.querySelector(".color");
let diagonal = document.querySelectorAll(".diagonal");

rainbow.onmouseover = function (e) {
var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
var color_2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
 this.style["background-color"] = color;
 this.style["color"] = color_2;
};

rainbow.addEventListener("click", () => {
    rainbow.style["background-color"] = color.value;
   });

rainbow.addEventListener("dblclick", () => {
    var color_2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
 for (let i = 0; i < diagonal.length; i++) {
    diagonal[i].style["background-color"] = color.value;
    diagonal[i].style["color"] = color_2;
 }
});
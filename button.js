button = document.getElementsByClassName("ripplebutton");
Array.prototype.forEach.call(button, function (b){
    b.addEventListener("click", createRipple);
});
function createRipple (e){
    circle = document.createElement("div");
    this.appendChild(circle);
    d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + "px";
    circle.style.top = e.clientY - rect.top - d/2 + "px";
    circle.classList.add("ripple");
}

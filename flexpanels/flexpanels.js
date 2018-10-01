const panels = document.querySelectorAll(".panel");

console.log("javascript is linked");
function toggleOpen() {
 this.classList.toggle("open"); 
 console.log("toggleopen is happy"); 
}
function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
        console.log("toggleactive is happy");
    }
}
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));

// alert('Hello there!')

const selectorButton = document.querySelectorAll('.selector');
function click(button) {

}

const targetDiv = document.querySelector('.showable');
const btn = document.querySelector('.opener');
btn.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block"
    }

};
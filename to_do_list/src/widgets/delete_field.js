import "../styles.css";
function createDeleteButton(fieldContainer){
    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    
    mybutton.style.cursor = "pointer";
    mybutton.onclick = function () {
        fieldContainer.remove();
    }
    return mybutton;
}

export {createDeleteButton};
import "./styles.css";
import correct from "../assets/check-underline.svg";

const add = document.querySelector("button");
const myUL = document.querySelector(".my-list");
const myfield = document.getElementsByTagName("p");
for (let i = 0; i < myfield.length; i++) {
    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    myfield[i].appendChild(mybutton);
}

add.addEventListener("click", () => {
    event.preventDefault();
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "field-container";

    const field = document.createElement("p");
    const input = document.querySelector(".myInput").value;
    const text = document.createTextNode(input);
    field.appendChild(text);
    fieldContainer.appendChild(field);
    myUL.appendChild(fieldContainer);
    document.querySelector(".myInput").value = "";

    //task done
    const correctSign = document.createElement("img");
    correctSign.src = correct;
    correctSign.style.width = "20px";
    correctSign.style.height = "20px";

    // delete task
    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    fieldContainer.appendChild(mybutton);
    mybutton.style.cursor = "pointer";
    mybutton.onclick = function () {
        fieldContainer.remove();
    }

    // task done
    field.onclick = function () {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none";
            correctSign.remove();
        } else {
            this.style.textDecoration = "line-through";
            field.before(correctSign);
        }
    };
    fieldContainer.style.display = "flex";  
    fieldContainer.style.alignItems = "center";  
});

// const myfield = document.getElementsByTagName("li");

for (let i = 0; i < myfield.length; i++) {
    myfield[i].onclick = function () {
        this.style.color = "red"; // Apply red color to the clicked item
    };
}
import "./styles.css";

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

    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    fieldContainer.appendChild(mybutton);
    mybutton.style.cursor = "pointer";
    mybutton.onclick = function () {
        fieldContainer.remove();
    }
    field.onclick = function () {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none";
        } else {
            this.style.textDecoration = "line-through";
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
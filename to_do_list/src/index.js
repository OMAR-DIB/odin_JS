import "./styles.css";

const add = document.querySelector("button");
const myUL = document.querySelector(".my-list");
const myfield = document.getElementsByTagName("li");
for (let i = 0; i < myfield.length; i++) {
    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    myfield[i].appendChild(mybutton);
}

add.addEventListener("click", () => {
    event.preventDefault();
    const field = document.createElement("li");
    const input = document.querySelector(".myInput").value;
    const text = document.createTextNode(input);
    field.appendChild(text);
    myUL.appendChild(field);
    document.querySelector(".myInput").value = "";

    const mybutton = document.createElement("span");
    mybutton.textContent = "X";
    field.appendChild(mybutton);
    mybutton.style.cursor = "pointer";
    mybutton.onclick = function () {
        field.remove();
    }
    field.onclick = function () {
        if (this.style.color === "red"){
            this.style.color = "black";
        }else{
            this.style.color = "red";
        }
    };
});

// const myfield = document.getElementsByTagName("li");

for (let i = 0; i < myfield.length; i++) {
  myfield[i].onclick = function () {
    this.style.color = "red"; // Apply red color to the clicked item
  };
}
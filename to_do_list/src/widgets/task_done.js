import correct from "../../assets/check-underline.svg";
import "../styles.css";

function createTaskDoneSign(field) {
    const correctSign = document.createElement("img");
    correctSign.src = correct; // Assumes `correct` is a defined URL
    correctSign.style.width = "20px";
    correctSign.style.height = "20px";
    field.onclick = function () {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none";
            correctSign.remove();
        } else {
            this.style.textDecoration = "line-through";
            this.before(correctSign);
        }
    };
}
export {createTaskDoneSign};
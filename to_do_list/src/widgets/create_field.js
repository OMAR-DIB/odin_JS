import "../styles.css";
import {createTaskDoneSign} from "./task_done.js";
import {createDeleteButton} from "./delete_field.js";
function createFieldContainer(input)
{
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "field-container";

    const field = createTaskField(input);
    fieldContainer.appendChild(field);

    const deleteButton = createDeleteButton(fieldContainer);
    fieldContainer.appendChild(deleteButton);

    createTaskDoneSign(field);

    fieldContainer.style.display = "flex";
    fieldContainer.style.alignItems = "center";
    
    return fieldContainer;
}

function createTaskField(input){
    const field = document.createElement("p");
    const text = document.createTextNode(input);
    field.appendChild(text);

    return field;
}

export {createFieldContainer};
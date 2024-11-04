
const createContact = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.className="page-content";

    const parag = document.createElement("p");
    parag.textContent = "test contact";
    pageContent.appendChild(parag);
    content.appendChild(pageContent);
};
export {createContact};
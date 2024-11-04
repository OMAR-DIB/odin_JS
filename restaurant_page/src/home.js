
const createHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.className="page-content";
    const head = document.createElement("h1");
    head.textContent = "Beary's Breakfast Bar";
    pageContent.appendChild(head);

    const parag = document.createElement("p");
    parag.textContent = "Beary's has the best porridge! The atmosphere and customer\
     service make you feel like you are sitting in the middle of the woods, eating like \
     a bear! This is exactly the kind of place that I like to return to again and again.";
     pageContent.appendChild(parag);

    const signature = document.createElement("h1");
    signature.textContent = "Goldilocks";
    pageContent.appendChild(signature);

    content.appendChild(pageContent);
}
export {createHomePage};
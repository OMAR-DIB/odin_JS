import { createContact } from "./contact";
import {createHomePage} from "./home.js";
import { createMenu } from "./menu";
const changePage = ()=>{
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    home.addEventListener("click", ()=>{
        deletePage();
        createHomePage();
    });
    contact.addEventListener("click", ()=>{
        deletePage();
        createContact();
    });
    menu.addEventListener("click", ()=>{
        deletePage();
        createMenu();
    });
}
const deletePage = ()=>{
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}
export {changePage};
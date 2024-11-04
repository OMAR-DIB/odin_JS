import "./style.css";
import odinImage from "./assets/odin-lined.png";
import { greeting } from "./greeting.js";

const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
console.log(greeting);
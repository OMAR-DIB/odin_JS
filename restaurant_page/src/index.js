import restaurant from "./assets/restaurant.jpg";
import "./style.css"
import {createHomePage} from "./home.js";
import { changePage } from "./change_page.js";
const initialeLoad = ()=>{
    changePage();
    createHomePage();
}

initialeLoad();

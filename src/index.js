import { home} from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./styles.css";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {home()});
menuButton.addEventListener("click", () => {menu()});
aboutButton.addEventListener("click", () => {about()});


home();
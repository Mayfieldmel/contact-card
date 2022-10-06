// Import modules
import "./form.js";
import "./submit.js";
// Import CSS files
import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import image files
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

// Import IndexedDB
import { initdb } from "./database";

window.addEventListener("load", function () {
  initdb();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

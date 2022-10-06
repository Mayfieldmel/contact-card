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
import { initDb, getDb, postDb } from './database';

window.addEventListener("load", function () {
  initDb();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
    // We are temporarily placing getDb() and postDb() function calls here for testing. We will move it to another event listener later.
    getDb();
    postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
    getDb();
});
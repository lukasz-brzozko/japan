import "../styles/index.scss";
import Parallax from "parallax-js";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const SCENE_ELEMENT_ID = "scene";

const sceneElement = document.getElementById(SCENE_ELEMENT_ID);
const parallaxInstance = new Parallax(sceneElement);

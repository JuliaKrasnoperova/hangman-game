import "../css/style.css";
import { darkModeHandle } from "./utils";
import { startGame } from "./game";

darkModeHandle();

const startGameButtom = document.getElementById("startGame");
startGameButtom.addEventListener("click", startGame);

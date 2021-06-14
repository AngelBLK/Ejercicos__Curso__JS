import hamburgerMenu from "./burger.js";
import { digitalClock, alarm } from "./reloj-audio.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    digitalClock("#reloj", "#mostrar", "#ocultar");
    alarm("assets/zelda_cofre.mp3","#play", "#pause");
    
});


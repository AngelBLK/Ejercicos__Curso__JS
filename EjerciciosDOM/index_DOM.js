import scrollTopButton from "./btn_scroll.js";
import hamburgerMenu from "./burger.js";
import countdouwn from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import { digitalClock, alarm } from "./reloj-audio.js";
import {moveBall} from "./teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    digitalClock("#reloj", "#mostrar", "#ocultar");
    alarm("assets/zelda_cofre.mp3","#play", "#pause");
    countdouwn("countdown", "Aug 17, 2021 15:30:00", "Feliz Cumpleaños futuro desarrollador web 💻");

    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn", "darkMode");
});
/** keydown: en cuento se presiona la tecla.
 *  keyup: en cuanto se levanta la tecla.
 *  keypress: mientras se mantenga precionada la tecla.
*/
d.addEventListener("keydown", e =>{
    //shortcuts(e);
    moveBall(e, ".ball", ".stage");
})


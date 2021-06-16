import hamburgerMenu from "./burger.js";
import { digitalClock, alarm } from "./reloj-audio.js";
import {moveBall} from "./teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    digitalClock("#reloj", "#mostrar", "#ocultar");
    alarm("assets/zelda_cofre.mp3","#play", "#pause");
    
});
/** keydown: en cuento se presiona la tecla.
 *  keyup: en cuanto se levanta la tecla.
 *  keypress: mientras se mantenga precionada la tecla.
*/
d.addEventListener("keydown", e =>{
    //shortcuts(e);
    moveBall(e, ".ball", ".stage");
})


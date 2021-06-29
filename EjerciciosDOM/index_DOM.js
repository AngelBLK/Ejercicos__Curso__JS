import scrollTopButton from "./btn_scroll.js";
import hamburgerMenu from "./burger.js";
import countdouwn from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj-audio.js";
import {moveBall} from "./teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(
        ".panel-btn", 
        ".panel", 
        ".menu a"
    );

    digitalClock(
        "#reloj", 
        "#mostrar", 
        "#ocultar"
    );
    alarm(
        "assets/zelda_cofre.mp3",
        "#play", 
        "#pause"
    );
    countdouwn(
        "countdown", 
        "Aug 17, 2021 15:30:00", 
        "Feliz Cumpleaños futuro desarrollador web 💻"
    );

    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
        "youtube", 
        "(min-width: 600px)", 
        `<a href="https://www.youtube.com/watch?v=EAPldVCRo-g" target="_blank" rel="noopener">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/EAPldVCRo-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    responsiveMedia(
        "gmaps", 
        "(min-width: 600px)", 
        `<a href="https://goo.gl/maps/faVoLWP6qGg1Bz3b7" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.32326366452!2d-99.17196599496774!3d19.42702054780647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1624410919761!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );

    responsiveTester("responsve-tester");

    userDeviceInfo("user-device");
    
});
/** keydown: en cuento se presiona la tecla.
 *  keyup: en cuanto se levanta la tecla.
 *  keypress: mientras se mantenga precionada la tecla.
*/
d.addEventListener("keydown", e =>{
    //shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "darkMode");


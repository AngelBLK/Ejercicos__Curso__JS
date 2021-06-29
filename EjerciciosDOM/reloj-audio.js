const d = document;
export function digitalClock(clock, show, hide){
    let clockTemp;
    d.addEventListener("click", e =>{
        if(e.target.matches(show)){
            clockTemp = setInterval(()=>{
                let clockTimer = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockTimer}</h3>`;
            },1000);

            e.target.disabled = true;
        }
        if(e.target.matches(hide)){
            clearInterval(clockTemp);
            d.querySelector(clock).innerHTML = null;
            //Volvemos a activar el boton de mostrar;
            d.querySelector(show).disabled = false;
        }
    })
}

export function alarm(sound, play, pause){
    let alarmTemp;
    const $audio = d.createElement("audio");
    $audio.setAttribute("src", sound);
    d.addEventListener("click", e=>{
        if(e.target.matches(play)){
            alarmTemp = setTimeout(()=>{
                $audio.play();
            }, 2000);

            e.target.disabled = true;
        }
        if(e.target.matches(pause)){
            clearTimeout(alarmTemp);
            $audio.pause();
            $audio.currentTime = 0; 
            d.querySelector(play).disabled = false;
        }
    });
}

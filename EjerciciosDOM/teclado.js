const d = document;
let x = 0,
y = 0;
export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

    switch(e.keyCode){
        case 37:
            
            if(limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            //move("left");
            break;
        case 38:
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            //move("up");
            
            break;
        case 39:
            
            if(limitsBall.right <  limitsStage.right){
                e.preventDefault();
                x++;  
            }
            //move("right");
            break;
        case 40:
            
            if(limitsBall.bottom <  limitsStage.bottom){
                e.preventDefault();
                y++;
            };
            //move("down");
            
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}
/*export function shortcuts(e){
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.altKey);
    console.log(e.shiftKey);

    if(e.key === "a" && e.altKey === true){
        alert(`Haz lanzado una alerta con el teclado.`);

    }
}*/
const d = document;
export default function countdouwn(id, limitDate, finalMessage ){
    const $countdouwn = d.getElementById(id),
    countdouwnDate = new Date(limitDate).getTime();

    let contdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdouwnDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0"+Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0"+Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        seconds = ("0"+Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countdouwn.innerHTML = `<h3> Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`;
        
        if(limitTime < 0){
            clearInterval(contdownTempo);
            $countdouwn.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);

    
}
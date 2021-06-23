const d = document,
w = window;

export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent){
    let breakepoint = w.matchMedia(mediaQuery);  

    const responsive = ((e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        } else{
            d.getElementById(id).innerHTML = mobileContent;
        }

    });

    breakepoint.addEventListener("change",responsive);
    responsive(breakepoint);

}
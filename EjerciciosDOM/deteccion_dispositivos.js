const d = document,
n = navigator,
ua = n.userAgent;
export default function userDeviceInfo(id){
    let $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/Android/),
        ios: () => ua.match(/iPhone|iPad|iPod/),
        any: function (){
            return this.android() || this.ios();
        }
    },
    isDesktop = {
        linux: () => ua.match(/Linux/),
        mac: () => ua.match(/Mac OS/),
        windows: () => ua.match(/Windows NT/),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBreowser = {
        chrome: () => ua.match(/Chrome/),
        safari: () => ua.match(/Safari/),
        firefox: () => ua.match(/Firefox/),
        opera: () => ua.match(/Opera/),
        ie: () => ua.match(/msie|iemobile/),
        edge: () => ua.match(/edge/),
        any: function() {
            return this.chrome() ||
            this.safari() ||
            this.firefox() ||
            this.opera() ||
            this.ie() ||
            this.edge() 
        }
    };
    console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isDesktop.windows());
    // console.log(isBreowser.chrome());

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <br>
            <li>Plataforma: <b>${isMobile.any()? isMobile.any() : isDesktop.any() }</b></li>
            <br>
            <li>Navegador: <b>${isBreowser.any()}</b></li>
        </ul>
    `;


    /** Contenido exclusivo */

    if(isBreowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`
    }

    if(isBreowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }

    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`
    }

    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Mac</mark></p>`
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

    /** Redirecciones*/

    if(isMobile.android()){
        window.location.href = "https://jonmircha.com";
    }
}
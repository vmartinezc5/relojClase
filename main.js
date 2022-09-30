const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

function actualizarReloj(){
    const fechaActual = new Date();

    const horax = fechaActual.getHours();
    const minutox = fechaActual.getMinutes();
    const segundox = fechaActual.getSeconds();

    const horaDeg = (horax /12) *360;
    hora.style.transform=  `rotate(${horaDeg}deg)`;

    const minutoDeg = (minutox / 60) *360;
    minuto.style.transform= `rotate(${minutoDeg}deg)`;

    const segundoDeg = (segundox / 60 ) *360;
    segundo.style.transform= `rotate(${segundoDeg}deg)`;

}

setInterval(actualizarReloj,1000)

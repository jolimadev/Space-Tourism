///
//útlimo paso me traje los id del html para vincular el countdown
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
///
const newYears = "1 Jan 2023"; /*una var constante (sin elst) q llegue a 01.01.23*/

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); //math-floor devuelve el valor entero redondeado más bajo de la var. 
    const hours = Math.floor(totalSeconds / 3600) % 24; //los 3600 son los  
    const mins = Math.floor(totalSeconds / 60) % 60; //en vez q las 34hs aca entra los 60 sec
    const seconds = Math.floor(totalSeconds) % 60; 
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours); //innerHTML añade html dentro de un elemento, (sirve para obtener el elemento desde js)
    minsEl.innerHTML = formatTime(mins); //otra def: InnerHTML  es una propiedad que nos permite leer un dato o asignarlo al contenido de un div o bien, del mismo control. Nos facilita la asignación de valores a controles.
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; //si tenemos menos que 10 que me saque el 0 de adelante, es como un formateo de reloj
}


//llamado inicial
countdown();

setInterval(countdown, 1000); //countdown cada seg 100= miliseg
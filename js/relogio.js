const hour = document.querySelector('.horas');
const min = document.querySelector('.minutos');
const sec = document.querySelector('.segundos');

function getTempo(){
    const tempo = new Date();

    const getHourRot = (360/12) * tempo.getHours();
    const getMinRot = (360/60) * tempo.getMinutes();
    const getSecRot = (360/60) * tempo.getSeconds();

    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
    getTempo();
},1000);

getTempo();

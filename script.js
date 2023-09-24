


const hB=document.getElementById("hour");
const mb=document.getElementById("min");
const sb=document.getElementById("sec");



setInterval(() => {
    const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

hB.textContent=hours;
mb.textContent=minutes;
sb.textContent=seconds;

}, 100);
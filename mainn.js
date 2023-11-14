let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(function() {
    let date = new Date();
    let s = date.getSeconds();
    let h = date.getHours();
    let m = date.getMinutes();

    if (m < 10) {
        min.textContent = "0" + m;
    } else {
        min.textContent = m;
    }
    if (h < 10) {
        hour.textContent = "0" + h;
    } else {
        hour.textContent = h;
    }
    if (s < 10) {
        sec.textContent = "0" + s;
    } else {
        sec.textContent = s;
    }


}, 1000);

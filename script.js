const targetDate = new Date("December 20, 2025 00:00:00").getTime();
const countdownElem = document.getElementById("miCuentaRegresiva");

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        countdownElem.innerHTML = "¡Llegó el gran día!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElem.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour + minute / 60) * 360 / 12;
    const minuteDeg = (minute + second / 60) * 360 / 60;
    const secondDeg = (second * 360) / 60;

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);

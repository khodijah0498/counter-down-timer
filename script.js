const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    // console.log(currentTime)
    const diffTime = newYearTime - currentTime;
    console.log(diffTime)


    const d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
    const h = Math.floor(diffTime / 1000 / 60 / 60) % 24;
    const m = Math.floor(diffTime / 1000 / 60) % 60;
    const s = Math.floor(diffTime / 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m; 
    seconds.textContent = s < 10 ? '0' + s : s;


}

setInterval(updateCountdown, 1000);
// setInterval(() => {
//     const currentTime = new Date();
//     // console.log(currentTime)
//     const diffTime = newYearTime - currentTime;
//     console.log(diffTime)


//     const d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
//     const h = Math.floor(diffTime / 1000 / 60 / 60) % 24;
//     const m = Math.floor(diffTime / 1000 / 60) % 60;
//     const s = Math.floor(diffTime / 1000) % 60;

//     days.textContent = d;
//     hours.textContent = h < 10 ? '0' + h : h;
//     minutes.textContent = m < 10 ? '0' + m : m;
//     seconds.textContent = s < 10 ? '0' + s : s;
// }, 1000);
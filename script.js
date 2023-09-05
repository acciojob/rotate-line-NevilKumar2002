//your JS code here. If required.
// script.js
// const line = document.querySelector('.line');
// let animationRunning = true;

// line.addEventListener('click', () => {
//     if (animationRunning) {
//         line.style.animationPlayState = 'paused';
//     } else {
//         line.style.animationPlayState = 'running';
//     }
//     animationRunning = !animationRunning;
// });
const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
    angle += 2; // Rotate by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

setInterval(rotateLine, 20);


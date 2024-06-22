const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

socket.on('scoreUpdate', (data) => {
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.innerHTML = `<p>${data}</p>`;
    console.log(data);
});

function sendScore() {
    const scoreInput = document.getElementById('scoreInput').value;
    socket.emit('scoreUpdate', scoreInput);
}
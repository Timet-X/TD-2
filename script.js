let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

ws.addEventListener('open', (event) => {
    console.log('Socket connection open!');
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('Error connecting to socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('Closing socket server');
});

// Send text input data
document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    let textInput = document.querySelector('#textInput').value;
    ws.send(JSON.stringify({ 'text': textInput }));
}, false);

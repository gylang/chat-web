var socketClient

var open

function start(address) {
    socketClient = new WebSocket(address)
    socketClient.onopen = onOpen
    socketClient.onclose = onClosed
    socketClient.onmessage = onMessage

}


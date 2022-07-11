var socketClient

var open

function start(address) {
    socketClient = new WebSocket(address)
    socketClient.onopen = onOpen
    socketClient.onclose = onClosed
    socketClient.onmessage = onMessage

}

function onOpen(event) {
    console.log(event)
}

function onClosed(event) {
    console.log(event)

}

function onMessage(event) {
    console.log(event)

}

function message(event) {
    console.log(event)

}

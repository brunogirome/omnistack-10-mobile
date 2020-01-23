import socketio from 'socket.io-client'

const socket = socketio('http://192.168.15.64:3003', {
    autoConnect: false
})

function subscribeToNewDevs (subscriFunction) {
    socket.on('new-dev', subscriFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect()
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect()
    }
}

export { connect, disconnect, subscribeToNewDevs }
const path = require('path')
const sleep = require('sleep').sleep

process.on('message', (message) => {
    console.log('message from parent : ' + message)
    console.log('I am ' + path.basename(__filename))

    while (1){
        sleep(1)
        console.log('wake up ' + __filename)
        process.send({cmd : 'block', block : 'B9C5FD3'})
        break
    }
})

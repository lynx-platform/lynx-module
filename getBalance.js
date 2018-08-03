const promise = require('promise')

const getBalance = (account) => {
    return new Promise( (resolve, reject) => {

        process.send({cmd : 'balance', account : 'A095FD3'})

        callback = (msg => {
            console.log(msg)
            resolve(msg)
            process.removeListener('message', callback)
        })
        process.on('message', callback)
    })
}

module.exports = getBalance

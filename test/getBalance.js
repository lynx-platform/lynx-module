const promise = require('promise')

const getBalance = (account) => {
    return new Promise((resolve, reject) => {

            process.send({cmd : 'balance', account : 'A095FD3'})

            let callback = ((balance) => {
                console.log('get response : ' + balance);
                process.removeListener('message', callback)
                resolve(balance)            })

            process.on('message', callback)
        });
}

module.exports = { getBalance: getBalance }

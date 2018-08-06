const path = require('path')
const promise = require('promise')
const sleep = require('sleep').sleep
const { getBalance } = require('./getBalance.js')

const run = async () => {

    console.log('[Child Process] I am ' + path.basename(__filename))

    /*
    getBalance('A095FD3').then((balance) => {
        console.log('[Child Process] Balance : ' + balance)
    })
    */
    let balance = await getBalance('A095FD3');
    console.log(balance)
}

run();

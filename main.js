const path = require('path');
const fork = require('child_process').fork

const child = {}

const parameters = []
const options = {}
/*
const options = {
    stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ]
}
*/

const makeChild = (program, parameters=[], options={}) => {

    const child = fork(path.resolve(program), parameters, options)

    switch (program){

        case 'smartContract.js':
            child.on('message', (msg) => {
                console.log('message from child : ' + msg);
                switch (msg.cmd){
                    case 'balance':
                        //console.log('Requested Banlance (id : ${msg.account} )')
                        console.log('Requested Banlance (id : '+ msg.account + ' )')
                        child.send('100won')
                }
            })
            break;

        default:
            console.log('No program exists')
            return null

    }
    return child
}

let program = 'smartContract.js'

child[program] = makeChild(program, parameters, options)
if (!child[program]){
    console.log('err')
}

//program = 'proofOfWork.js'
//child[program] = makeChild(program, parameters, options)
//if (!child[program]){
//    console.log('err')
//}

//setInterval(() => {
//    console.log('[parent] hi')
//    child['smartContract.js'].send('hi')
//}, 5000)

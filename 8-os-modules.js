const os  = require('os')

//info about user
const user =os.userInfo();
console.log(user)

//method return the sytem  uptime
console.log(`The system uptime is ${os.uptime()}`)

const currentOs={
    name:os.type(),
    release:os.release(),
    freeMem : os.freemem(),
    totalMem: os.totalmem()
}


console.log(currentOs)
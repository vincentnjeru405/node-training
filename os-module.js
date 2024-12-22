const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
// const uptime = os.uptime();
// console.log(uptime);
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);
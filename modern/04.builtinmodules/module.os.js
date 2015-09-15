/**
 * 4.1 os 모듈
 *
 * 애플리케이션을 만들 때 많이 활용되지는 않는다.
 *
 * hostname()
 * type()
 * platform()
 * arch()
 * release()
 * uptime()
 * loadavg()
 * totalmem()
 * freemem()
 * cpus()
 * networkInterfaces()
 *
 */

var os = require('os');

console.log('hostname():', os.hostname());
console.log('type():', os.type());
console.log('arch():', os.arch());
console.log('release():', os.release());
console.log('uptime():', os.uptime());
console.log('loadavg():', os.loadavg());
console.log('totalmem():', os.totalmem());
console.log('freemem():', os.freemem());
console.log('cpus():', os.cpus());
console.log('networkInterfaces():', os.networkInterfaces());


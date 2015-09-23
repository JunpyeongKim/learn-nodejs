/**
 * 8. 기타 유용한 확장 모듈
 *
 * commander
 * - (*) 명령줄 도구를 만들수 있게 해 줌
 *
 * - $ sudo npm install commander -g
 *
 * $ node commander.basic [-V | --version]
 * $ node commander.basic [-h | --help]
 * $ node commander.basic -c -s -M -m 16G
 *
 */

/**
 * Module dependencies
 */
var program = require('commander');

program.
    version('0.0.1').
    option('-c, --cpu', 'Upgrade the cpu').
    option('-s, --ssd', 'Upgrade the storage device to solid-state disk').
    option('-M, --monitor', 'Purchase a monitor').
    option('-m, --memory [size]', 'Set the memory [size]', 'memory_size');

// 추가로 더 상세한 정보를 보여주고 싶을 때
program.on('--help', function () {
    console.log('    EXamples:');
    console.log('');
    console.log('        $ node commander.basic -c -s -M -m 16G');
    console.log('        $ node commander.basic -cpu -ssd -monitor -memory 16G');
    console.log('');
});

console.log('you ordered a notebook with:\n');

console.log('- program.cpu:', program.cpu);
if (program.cpu) {
    console.log('CPU is upgraded to 2.8 GHz');
}

console.log('- program.ssd:', program.ssd);
if (program.ssd) {
    console.log('Storage is upgraded to solid-state disk');
}

console.log('- program.monitor:', program.monitor);
if (program.monitor) {
    console.log('You purchased a monitor additionally');
}

console.log('- program.memory:', program.memory);
console.log('Ram size: %s', program.memory);

program.parse(process.argv);

/*
// prompt(msg, fn)
program.prompt('name:', function (name) {
    console.log('name: %s', name);
});

program.prompt('Age:', Number, function (age) {
    console.log('age: %j', age);
});

program.prompt('Birthdate:', Date, function (date) {
    console.log('date: %s', date);
});

// password(msg[, mask], fn)
program.password('Password: ', function (pass) {
    console.log('got "%s"', pass);
    process.stdin.destroy();
});

program.password('Password: ', '*', function (pass) {
    console.log('got "%s"', pass);
    process.stdin.destroy();
});

// confirm(msg, fn)
program.confirm('continue? ', function (ok) {
    console.log('got %j', ok);
});

// choose(list, fn)
var list = ['tobi', 'loki', 'jane', 'many', 'luna'];
console.log('Choose the coolest pet:');

program.choose(list, function (i) {
    console.log('you chose %d "%s"', i, list[i]);
});
*/
/**
 * 3.3. process 객체
 *
 * 프로그램과 관련된 정보를 나타내는 객체
 *
 * attributes
 * - argv, env, version, versions, arch, platform
 *
 * methods
 * - exit([exitCode=0]), memoryUsage(), uptime()
 *
 * $ node process.js --exit 10000
 *
 */

// attributes
console.log('- process.env:\n', process.env);
console.log('- process.version:\n', process.version);
console.log('- process.versions:\n', process.versions);
console.log('- process.arch:\n', process.arch);
console.log('- process.platform:\n', process.platform);

// methods
console.log('- process.memoryUsage():\n', process.memoryUsage());
console.log('- process.uptime():\n', process.uptime());

// argv & exit()
process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof item + ' : ', item);

    if (item === '--exit') {
        var exitTime = Number(process.argv[index + 1]);
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});

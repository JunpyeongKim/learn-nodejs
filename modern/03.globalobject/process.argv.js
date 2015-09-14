/**
 * 3.3. process 객체
 *
 * 프로그램과 관련된 정보를 나타내는 객체
 * - argv, env, version, versions, arch, platform
 * - exit([exitCode=0]), memoryUsage(), uptime()
 *
 * $ node process.argv.js --exit 10000
 *
 */

// attributes
console.log('- process.env: ', process.env);
console.log('- process.version: ', process.version);
console.log('- process.versions: ', process.versions);
console.log('- process.arch: ', process.arch);
console.log('- process.platform: ', process.platform);

// methods
console.log('- process.memoryUsage(): ', process.memoryUsage());
console.log('- process.uptime(): ', process.uptime());

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

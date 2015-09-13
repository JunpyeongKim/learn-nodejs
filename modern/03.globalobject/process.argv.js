/**
 * Created by Junpyeong Kim on 2015. 9. 13..
 *
 * 3.3. process 객체
 * - 프로그램과 관련된
 * - argv, env, versi정보on, versions, arch, platform
 * - exit([exitCode=0]), memoryUsage(), uptime()
 */

// process.argv
// $ node process.argv.js --exit 10000
process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof item + ' : ', item);

    if (item == '--exit') {
        var exitTime = Number(process.argv[index + 1]);
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});
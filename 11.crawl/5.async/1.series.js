/**
 * 当你多个异步任务需要按顺序的执行可用async
 */
let async = require('async');
console.time('cost')
//数组中的异步任务会依次执行
function series(tasks, finalCallback) {
    let index = 0;
    let ary = [];

    function next(err, result) {
        index > 0 ? ary.push(result) : null;
        (err || index >= tasks.length) ? finalCallback(err, ary) : tasks[index++](next);
    }

    next();
}
series([
    function (next) {
        setTimeout(function () {
            console.log(1);
            // 1 错误对象
            next(null, 1);
        }, 3000)
    },
    function (next) {
        setTimeout(function () {
            console.log(2);
            next(null, 2);
        }, 2000)
    },
    function (next) {
        setTimeout(function () {
            console.log(3);
            next(null, 3);
        }, 1000)
    }
], function (err, result) {
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
});

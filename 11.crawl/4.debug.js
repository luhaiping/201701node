let debug = require('debug');
/**
 * debug的作用类似于console.log
 *
 **/
//不管在何种情况下执行都会打印hello
//console.log('hello');
//debug受环境的时间，有时候打印，有时候不打印
//日志记录器的名字
//loggerA执行的时候会去读取环境变量中 DEBUG 的值，如果它跟当前目录记录器名字匹配，则在控制台输出

let loggerA = debug('loggerA');
loggerA('loggerA');

let loggerB = debug('loggerB');
loggerB('loggerB');
/**
 * loggerA 是日志记录的名称
 * loggerB 是一个变量名
 * loggerC 是要打印的参数
 * 当环境变量中DEBUG的值是loggerA的时候，会输出loggerA: loggerC
 * 这种机制可以让我们在不修改代码的情况下，动态调整输出的内容
 */
/*
var loggerB = debug('loggerA');
loggerB('loggerC');*/

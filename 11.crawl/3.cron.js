//计划任务
let CronJob = require('cron').CronJob;
//创建一个任务的实例
/**
 *  *   *    *   *   *     *
 *  秒 分钟  时  日期  月份 星期
 *  * 代表所有可能出现的值
 *  5 具体 的值
 *  5,15,20,25 列出所有可能的值
 *  0-30 范围 在指定范围内都可以
 *  星/5 每隔5秒一次
 *  定义一个任务 每周一或周五晚上10点执行一次
 */
let job = new CronJob('1 1 22 * * 1,5',function(){
    console.log(new Date().toLocaleString());
});
job.start();
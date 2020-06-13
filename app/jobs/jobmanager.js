import {httpConstants} from "../common/Constants";
import JobController from "../module/jobs";

const CronMasterJob = require('cron-master').CronMasterJob;

module.exports = new CronMasterJob({

    // Optional. Used to determine when to trigger the 'time-warning'. Fires after
    // the provided number of milliseconds (e.g 2 minutes in the case below) has
    // passed if the job has not called the done callback

    timeThreshold: (5 * 60 * 1000),
    meta: {
        name: 'payment link',
        requestID: ""
    },
    cronParams: {
        cronTime: "*/30 * * * * *",
        onTick: async function (job, done) {
            // job.on('overlapping-call', function () {
            //     return;
            // });

            // lhtLog('onTick - saveStreamOnSchedule', `Cron : OnTick Invoked!`, {}, "", '', httpConstants.LOG_LEVEL_TYPE.INFO);
            // console.log("CRONE RUNNING HERE");
            done(null, 'ok');
        }
    }
});

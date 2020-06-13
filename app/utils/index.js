import {httpConstants, failureMessage} from '../../app/common/Constants'
import moment from "moment";

export default class Utils {

    static response(res, data, message, success, code) {
        let messageObj = {
            "param": "",
            "msg": message,
        };

        let responseObj = {
            responseData: data,
            message: [messageObj],
            success: success,
            responseCode: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    };

    static sendErrorPromise(err, msg, code) {
        err = err || {};
        return Promise.reject({
            error: err,
            message: msg ? msg : err.message ? err.message : failureMessage.INTERNAL_SERVER_ERROR,
            code: code ? code : httpConstants.RESPONSE_CODES.SERVER_ERROR
        });
    }

    static responseForValidation(res, data, errorArray, success, code = 500) {

        let responseObj = {
            responseData: data,
            message: errorArray,
            success: success,
            responseCode: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    }


    static handleError(err, req, res) {
        if (!res)
            return false;
        err = err || {};
        const msg = err.message ? err.message : failureMessage.INTERNAL_SERVER_ERROR;
        const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR;
        this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code);
    }

    /**
     *              This function is made to handle success and error callback!
     * @param promise
     * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
     */
    static async parseResponse(promise) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => [err]);
    }

    /**
     *
     * @param functionName
     * @param message
     * @param payload:should be in object form
     * @param developerAlias
     * @param requestID
     * @param type
     * @param timestamp
     * @constructor
     */
    static lhtLog(functionName, message, payload, developerAlias, requestID = '', type = 'info', timestamp = Date.now()) {

        if (!timestamp || timestamp === '')
            timestamp = moment().format('MMM D HH:mm:ss.SSS');
        console.log('[ ' + timestamp + ` ] ${type}: ${functionName}: ${message}: ${JSON.stringify(payload)}`);
        // console.log(`LOG TYPE : ${type}, FunctionName : ${functionName},  Message : ${message}, payload : ${JSON.stringify(payload)}, Time ${timestamp}\n`);
    }

    /**
     *
     * @param title
     * @param data
     */
    static consoleLogger(title, data) {
        console.log("Core API Log -> " + title + "  :  ", data);
    }

    /**
     *
     * @param timestamp
     */
    static getDateFromTimestamp(timestamp) {
        let date = new Date(timestamp);
        //return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return date.getMonth() < 9 ? date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear() : date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    /**
     *
     * @param timestamp
     * @param format
     */

    static getFormattedDate(timestamp, format) {
        return moment(new Date(timestamp)).format(format);
    }

    static getISOFormattedDate(timestamp) {
        return new Date(timestamp).toISOString();
    }

}
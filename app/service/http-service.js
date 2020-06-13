import request from 'request';
import {httpConstants} from '../common/Constants';

/**
 * execute Http Request request
 */
class HttpService {
    static httpRequest(method, hostname, path, data, headers, requestID = '0') {

        lhtLog('httpRequest', 'start', {
            type: httpConstants.LOG_LEVEL_TYPE.HTTP_REQUEST,
            data: {method: method, hostname: hostname, path: path, data: data, headers: headers}
        }, "", requestID, httpConstants.LOG_LEVEL_TYPE.VERBOSE);
        return new Promise(function (fulfill, reject) {
            request({url: hostname + path, method: method, headers: headers, family: 4, json: data},
                function (error, response, body) {
                    if (error) {
                        lhtLog('httpRequest', 'end', {
                            type: httpConstants.LOG_LEVEL_TYPE.HTTP_REQUEST,
                            data: {
                                method: method, hostname: hostname, path: path, data: data,
                                headers: headers, error: error
                            }
                        }, "", requestID, httpConstants.LOG_LEVEL_TYPE.ERROR);
                        reject(error);
                    }
                    else {
                        lhtLog('httpRequest', 'end', {
                            type: httpConstants.LOG_LEVEL_TYPE.HTTP_REQUEST,
                            data: {
                                method: method, hostname: hostname, path: path, data: data, headers: headers,
                                response: response, body: body
                            }
                        }, "", requestID, httpConstants.LOG_LEVEL_TYPE.VERBOSE);
                        fulfill(body);
                    }
                });
        });
    }
}

module.exports = HttpService;
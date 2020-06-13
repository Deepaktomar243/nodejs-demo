export const httpConstants = {

    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_REQUEST: 415,
        TOO_MANY_REQUEST: 429
    },

    HTTP_REQUEST_TYPE: {
        POST: 'post',
        GET: 'get'
    },
    HTTP_REQUEST_HEADER_VALUE: {
        X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        APPLICATION_JSON: 'application/json'
    },
    HEADER_KEYS: {
        DEVICE_TYPE: 'device-type',
        DEVICE_ID: 'device-id',
        SESSION_TOKEN: 'session-token',
        API_KEY: 'api-key',
    },
    DEVICE_TYPE: {
        ANDROID: 'android',
        IOS: 'ios',
        WEB: 'web'
    },
    BASE_URL: {
    },
    END_POINT: {
    },

    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false
    },

    LOG_LEVEL_TYPE: {
        INFO: 'info',
        ERROR: 'error',
        WARN: 'warn',
        VERBOSE: 'verbose',
        DEBUG: 'debug',
        SILLY: 'silly',
        HTTP_REQUEST: 'http request',
        FUNCTIONAL: 'functional'
    },
};


export const apiFailureMessage = {

};

export const apiSuccessMessage = {

};

export const failureMessage = {

};

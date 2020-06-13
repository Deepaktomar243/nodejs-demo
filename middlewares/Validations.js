import {httpConstants} from '../app/common/Constants';
import Utils from '../app/utils/index';

module.exports = {

    validateMAD(req, res, next) {
        let schema = {
            'userID': {notEmpty: true, errorMessage: 'userID can not be empty or be null'},
            'appMeta': {notEmpty: true, errorMessage: 'appMeta can not be empty or be null'}
        };
        return validateRequestBody(req, res, next, schema, {});
    }
};


function validateRequestBody(req, res, next, schema, responseData = {}) {
    req.checkBody(schema);
    let errors = req.validationErrors();
    if (!errors)
        return next();
    else
        return Utils.responseForValidation(res, responseData, errors, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.BAD_REQUEST);
}

import ValidationManager from '../middlewares/Validations';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('working fine');
    });

};

import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import expressValidator from 'express-validator';

module.exports = function (app) {
    //For print APIs Logs
    app.use(morgan(':method :url :response-time'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: false}));
    // parse application/json
    app.use(bodyParser.json());
    app.use(compression(9));
    app.use(cors());
    app.use(expressValidator());

};
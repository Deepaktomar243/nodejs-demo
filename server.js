const APP = require('express')();
import DBConnection from './config/dbConnect';
import Utils from "./app/utils";
import Config from "./config";
import routes from './routes';
import {httpConstants} from './app/common/Constants';


require('./config/express')(APP);

APP.set('view engine', 'pug');

global.lhtLog = Utils.lhtLog;
global.basedir = __dirname;

class Server {
    static listen() {
        Promise.all([DBConnection.connect()]).then(() => {
            APP.listen(Config.PORT);
            routes(APP);
            // require('./config/jobInitializer');
            lhtLog('listen', `Server Started on port ${Config.PORT}`, {}, "", '', httpConstants.LOG_LEVEL_TYPE.INFO);
        }).catch(error => lhtLog('listen', 'failed to connect', {err: error}, "", '', httpConstants.LOG_LEVEL_TYPE.ERROR));
    }
}

Server.listen();

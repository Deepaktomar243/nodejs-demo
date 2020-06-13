
import Config from '.';
import mongoose from 'mongoose';
import Utils from "../app/utils";

export default class DBConnection {
    static async connect() {
        Utils.consoleLogger("DBConnection URL DB " + Config.DB + " trying to connect on ", new Date());
        let options = {
            keepAlive: 1,
            autoReconnect: true,
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        let res = await mongoose.connect(Config.DB, options);
        if (res)
            Utils.consoleLogger("DBConnection URL DB " + Config.DB + " connected on ", new Date());
        return res
    }
};

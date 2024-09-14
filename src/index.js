require('dotenv').config();
const createApp = require('./app');
const { config } = require('./config/config');

class ApiServer {
    constructor() {
        this.app = createApp();
        this.puerto = config.port;
    }
    listen() {
        this.app.listen(this.puerto, () => {
            console.log(`Express App is running on ${this.puerto}`);
        });
    }
}

const ExecuteApi = new ApiServer();
ExecuteApi.listen();

module.exports = ApiServer;
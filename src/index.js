require('dotenv').config();
const createApp = require('./app');

class ApiServer {
    constructor() {
        this.app = createApp();
        this.puerto = process.env.PORT || 5000;
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
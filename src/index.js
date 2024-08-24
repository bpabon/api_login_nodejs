require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { createServer } = require('http');
const createApp = require('./app');

class ApiServer {
    constructor() {
        this.app = createApp();
        this.puerto = process.env.PORT || 3000;
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
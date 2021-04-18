require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
const express = require('express');

class AppController {
  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(express.json());
  }

  routes() {}
}

module.exports = new AppController().express;

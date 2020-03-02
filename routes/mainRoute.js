const path = require('path');
const mainRoute = require('express').Router();
// const { env } = require("../lib/databaseMySQL");
let env = 'prod';

mainRoute.get('/*', (req, res) => {
  if (env === 'dev' || env === 'uat' || env === 'prod') {
    console.log('mainRoute prod')
    const route = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(route);
  } else {
    console.log('mainRoute local')
    const route = path.join(__dirname, '..', '..', 'src', 'index.html');
    res.sendFile(route);
  }
});

module.exports = mainRoute;

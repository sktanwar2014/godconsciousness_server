const path = require('path');
const mainRoute = require('express').Router();
const { env } = require("../lib/databaseMySQL");


mainRoute.get('*', (req, res) => {
  
  // const route = path.join(__dirname, '..', 'dist', 'index.html');
  
  if (env === 'dev' || env === 'uat' || env === 'prod') {
    const route = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(route);
  } else {
    const route = path.join(__dirname, '..', '..', 'src', 'index.html');
    res.sendFile(route);
  }
});

module.exports = mainRoute;

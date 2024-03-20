const marslight_mirage = require('marslight-mirage');
const marslight_mirage_use = require('marslight-mirage-use');
const validator = require('validator');
const mysql = require('mysql');
const sinon = require('sinon');
const bluebird = require('bluebird');
const lodash = require('lodash');
const ejs = require('ejs');
const jsonwebtoken = require('jsonwebtoken');
const enzyme = require('enzyme');
const xml2js = require('xml2js');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const jest = require('jest');
const underscore = require('underscore');
const eth_crypto = require('eth-crypto');
const axios = require('axios');
const async = require('async');
const debug = require('debug');
const dotenv = require('dotenv');
const eslint = require('eslint');
const node_sass = require('node-sass');

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));
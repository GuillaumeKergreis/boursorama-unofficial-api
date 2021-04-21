'use strict';

const express = require('express');
const BoursoramaApi = require('./BoursoramaApi');

const app = express();

app.use(express.json());

const clientNumber = process.env.CLIENT_NUMBER; // e.g. 0123456789
const password = process.env.PASSWORD; // e.g. 12345678

const boursoramaApi = new BoursoramaApi(clientNumber, password);

main();
async function main() {

    await boursoramaApi.init();

    await boursoramaApi.connect();

    const accounts = await boursoramaApi.getAccounts();

    console.log(accounts);

    await boursoramaApi.browser.close();

}

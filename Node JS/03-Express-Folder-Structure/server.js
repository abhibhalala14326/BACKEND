"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserRouter_1 = require("./router/UserRouter");
var hostname = '127.0.0.1';
var port = 9999;
var app = (0, express_1.default)();
console.log("dirname:", __dirname);
app.get('/', function (req, res) {
    res.json({
        msg: 'Hello'
    });
});
app.use('/api/abhi', UserRouter_1.default);
app.listen(port, hostname, function () {
    console.log("http://".concat(hostname, ":").concat(port));
});

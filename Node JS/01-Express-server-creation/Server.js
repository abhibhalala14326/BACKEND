"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hostName = "127.0.0.1";
var port = 9999;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.status(200).json({
        msg: "Welcome to Express Server",
    });
});
app.listen(port, hostName, function () {
    console.log("Express Server is started at http://".concat(hostName, ":").concat(port));
});
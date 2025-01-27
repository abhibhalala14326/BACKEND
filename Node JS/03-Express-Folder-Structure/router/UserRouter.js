"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// usage : get 
// url : http://127.0.0.1:9999/users
// method: Get
var Userrouter = (0, express_1.Router)();
Userrouter.get('/home', function (req, res) {
    res.json({
        msg: 'userdata inset '
    });
});
exports.default = Userrouter;

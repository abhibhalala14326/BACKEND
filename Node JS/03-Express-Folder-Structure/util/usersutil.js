"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUtil = void 0;
var path_1 = require("path");
var jsonfile = require("jsonfile");
var UsersUtil = /** @class */ (function () {
    function UsersUtil() {
    }
    UsersUtil.getAllUserFromDb = function () {
        var _this = this;
        console.log('dirname:', __dirname);
        return new Promise(function (resolve, rejects) {
            jsonfile.readfile(_this.usersJsonPath, function (err, data) {
                if (err) {
                    rejects(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    UsersUtil.usersJsonPath = path_1.default.join(__dirname, "..", "DB", "users.json");
    return UsersUtil;
}());
exports.UsersUtil = UsersUtil;
;

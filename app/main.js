"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "/dist")));
var PORT = process.env.PORT;
if (PORT) {
    var ADDRESS = "0.0.0.0:".concat(PORT);
    console.log("app started listening at ".concat(ADDRESS));
    app.listen(PORT);
}
else {
    console.log("no port was given");
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Server {
    constructor() {
        this._router = express_1.Router();
    }
    enable() {
        this._router.get('/', (req, res) => {
            // Reply with a hello world when no name param is provided
            res.send('Hello, World!');
        });
    }
}
exports.Server = Server;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mssql");
const connect_params = require("./config.json");
class MsSqlProvider {
    constructor() {
        this.dbConfig = connect_params;
    }
    connect() {
        return new Promise((resolve, reject) => {
            try {
                this._connection = new sql.ConnectionPool(this.dbConfig, err => {
                    if (err) {
                        console.error("Connection failed.", err);
                        resolve({ success: false, errors: [err] });
                    }
                    else {
                        console.log("Database pool #1 connected.");
                        resolve({ success: true, errors: [] });
                    }
                });
            }
            catch (ex) {
                //reject(ex);
                resolve({ success: false, errors: [ex] });
            }
        });
    }
    disconnect() {
        //throw new Error("Method not implemented.");
        return Promise.resolve({ success: true, errors: [] });
    }
    executeReader(sentence) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Sentence executed: " + sentence);
            if (this._connection) {
                let request = new sql.Request(this._connection);
                let result = yield request.query(sentence);
                return Promise.resolve({ success: true, errors: [], items: result.recordset });
            }
            else {
                return Promise.resolve({ success: false, errors: ['database is not connected'], items: null });
            }
        });
    }
    executeScalar(sentence) {
        throw new Error("Method not implemented.");
    }
    executeNonQuery(sentence) {
        throw new Error("Method not implemented.");
    }
}
exports.MsSqlProvider = MsSqlProvider;

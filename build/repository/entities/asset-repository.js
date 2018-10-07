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
const index_1 = require("../index");
const sentences = require("./sentences.json");
class AssetRepository extends index_1.BaseRepository {
    constructor() {
        super();
        this.dbContext = new index_1.MsSqlProvider();
    }
    create(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            let created;
            let connection = yield this.dbContext.connect();
            if (connection.success) {
                created = yield this.dbContext.executeNonQuery(sentences.getAssets);
            }
            else {
                Promise.resolve(false);
            }
            yield this.dbContext.disconnect();
            return Promise.resolve(created.success);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let readed;
            let connection = yield this.dbContext.connect();
            if (connection.success) {
                readed = yield this.dbContext.executeReader(sentences.getAssets);
            }
            else {
                Promise.resolve([]);
            }
            yield this.dbContext.disconnect();
            return Promise.resolve(readed.success ? readed.items : []);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let readed = { success: false, items: [], errors: [] };
            let connection = yield this.dbContext.connect();
            if (connection.success) {
                let sql_sentence = index_1.String.Format(sentences.getAssetById, id);
                readed = yield this.dbContext.executeReader(sql_sentence);
            }
            yield this.dbContext.disconnect();
            return Promise.resolve(readed.success ? (readed.items ? readed.items[0] : []) : []);
        });
    }
}
exports.AssetRepository = AssetRepository;

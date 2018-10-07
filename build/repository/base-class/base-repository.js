"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    get dbContext() {
        return this._dbContext;
    }
    set dbContext(provider) {
        this._dbContext = provider;
    }
    create(item) {
        throw new Error("Method not implemented.");
    }
    update(id, item) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        throw new Error("Method find not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
}
exports.BaseRepository = BaseRepository;

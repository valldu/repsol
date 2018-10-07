"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class collection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        return this.items[index];
    }
}
exports.collection = collection;

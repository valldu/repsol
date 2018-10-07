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
const asset_repository_1 = require("./repository/entities/asset-repository");
class Startup {
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            let asset = new asset_repository_1.AssetRepository();
            //asset.create({"id": 1, "desc:" : "test"});
            // //console.log(JSON.stringify(items));       
            var item = yield asset.findOne(1);
            console.log(JSON.stringify(item));
        });
    }
}
Startup.main();

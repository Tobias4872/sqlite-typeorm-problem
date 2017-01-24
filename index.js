"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require("reflect-metadata");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    driver: {
        storage: "/tmp/sqlite-typeorm-problem",
        type: "sqlite",
    },
    entities: [
        "./models/*.js",
    ],
    logging: {
        logQueries: true,
    },
}).then((c) => __awaiter(this, void 0, void 0, function* () {
    // tslint:disable-next-line
    return c.syncSchema();
}), (error) => {
    // tslint:disable-next-line
    console.log(error);
}).catch((error) => {
    // tslint:disable-next-line
    console.log(error);
});
//# sourceMappingURL=index.js.map
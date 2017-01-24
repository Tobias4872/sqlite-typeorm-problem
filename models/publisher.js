"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const typeorm_1 = require("typeorm");
const player_specification_1 = require("./player-specification");
const site_1 = require("./site");
let Publisher = class Publisher {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Publisher.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 128,
    }),
    __metadata("design:type", String)
], Publisher.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany((type) => player_specification_1.PlayerSpecification, (playerSpecification) => playerSpecification.publisher),
    __metadata("design:type", Array)
], Publisher.prototype, "playerSpecifications", void 0);
__decorate([
    typeorm_1.OneToMany((type) => site_1.Site, (site) => site.publisher),
    __metadata("design:type", Array)
], Publisher.prototype, "sites", void 0);
Publisher = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [])
], Publisher);
exports.Publisher = Publisher;
//# sourceMappingURL=publisher.js.map
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
let Zone = class Zone {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Zone.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 128,
    }),
    __metadata("design:type", String)
], Zone.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => site_1.Site, (site) => site.zones, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", site_1.Site)
], Zone.prototype, "site", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => player_specification_1.PlayerSpecification, {
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", player_specification_1.PlayerSpecification)
], Zone.prototype, "playerSpecification", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Zone.prototype, "zoneKey", void 0);
Zone = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [])
], Zone);
exports.Zone = Zone;
//# sourceMappingURL=zone.js.map
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
const publisher_1 = require("./publisher");
let PlayerSpecification = class PlayerSpecification {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PlayerSpecification.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 128,
    }),
    __metadata("design:type", String)
], PlayerSpecification.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => publisher_1.Publisher, (publisher) => publisher.playerSpecifications, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", publisher_1.Publisher)
], PlayerSpecification.prototype, "publisher", void 0);
PlayerSpecification = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [])
], PlayerSpecification);
exports.PlayerSpecification = PlayerSpecification;
//# sourceMappingURL=player-specification.js.map
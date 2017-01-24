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
const zone_1 = require("./zone");
let Site = class Site {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Site.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 128,
    }),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => publisher_1.Publisher, (publisher) => publisher.sites, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", publisher_1.Publisher)
], Site.prototype, "publisher", void 0);
__decorate([
    typeorm_1.OneToMany((type) => zone_1.Zone, (zone) => zone.site),
    __metadata("design:type", Array)
], Site.prototype, "zones", void 0);
Site = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [])
], Site);
exports.Site = Site;
//# sourceMappingURL=site.js.map
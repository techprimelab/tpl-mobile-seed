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
/**
 * Created by roshan on 16/6/16.
 */
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var MyComponent = (function () {
    function MyComponent(builder) {
        this.builder = builder;
        this.changed = new core_1.EventEmitter();
        this.isSelected = true;
        this.totalItems = 500;
        this.showBox = true;
        this.emp = {
            name: "roshan",
            height: 56
        };
        this.username = new common_1.Control('', common_1.Validators.required);
        this.username = new common_1.Control('', common_1.Validators.minLength(5));
        this.username = new common_1.Control('', common_1.Validators.maxLength(10));
        this.showItems();
        this.form = builder.group({
            username: this.username
        });
    }
    MyComponent.prototype.showItems = function () {
        console.log("items" + this.totalItems);
    };
    MyComponent.prototype.ngOnInit = function () {
        console.log(this.fullname);
    };
    MyComponent.prototype.select = function () {
        this.changed.emit("hey its me, your child...");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MyComponent.prototype, "fullname", void 0);
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-comp',
            templateUrl: '../app/templates/listcomponent.html',
            styleUrls: ['../app/css/listcomponent.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=app.mycomponent.js.map
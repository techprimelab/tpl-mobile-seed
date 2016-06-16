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
/// <reference path="../../node_modules/typescript/lib/jquery.d.ts"/>
var core_1 = require('@angular/core');
var app_myservice_1 = require('../services/app.myservice'); //importing a module
var app_mycomponent_1 = require('./app.mycomponent');
//component metadata -describes component
var AppComponent = (function () {
    function AppComponent(_myservice) {
        this._myservice = _myservice;
        //define services here in constructor
        this.amount = 67;
        this.collegeName = "sdfdf";
        this.link1 = "https://www.gstatic.com/webp/gallery3/2.png";
        this.student = [{
                name: "roshan",
                height: 34.6786876,
                fees: 200
            }, {
                name: "sda",
                height: 3.567576,
                fees: 200
            }, {
                name: "asd",
                height: 34.5656,
                fees: 200
            }];
        this.appname = "Get BIll";
        this.color = "red";
        this.items = 10;
    }
    AppComponent.prototype.clicked = function (event) {
        console.log("click");
        console.log(this._myservice.getTotal());
        this.child1.totalItems = this.items++;
        this.child1.showItems();
    };
    AppComponent.prototype.blur = function (event) {
        console.log("blur");
    };
    AppComponent.prototype.mouseenter = function (event) {
        console.log("enter");
    };
    AppComponent.prototype.changed = function (message) {
        console.log(message);
    };
    __decorate([
        core_1.ViewChild(app_mycomponent_1.MyComponent), 
        __metadata('design:type', app_mycomponent_1.MyComponent)
    ], AppComponent.prototype, "child1", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../app/templates/component.html',
            providers: [app_myservice_1.MyService],
            directives: [app_mycomponent_1.MyComponent] //tells that  this component has some child components
        }), 
        __metadata('design:paramtypes', [app_myservice_1.MyService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
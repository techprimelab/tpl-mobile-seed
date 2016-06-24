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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var shared_service_1 = require("../shared/shared.service");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(formBuilder, _router, _login) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._login = _login;
        this.userName = "";
        this.userNameCtrl = new common_1.Control('', common_1.Validators.required);
        this.forgotPasswordFormCtrl = formBuilder.group({
            userNameCtrl: this.userNameCtrl,
        });
    }
    ForgotPasswordComponent.prototype.onSubmit = function () {
        /*this._login.userLogin({userName: this.userName})
            .subscribe(res => {
                alert("call is made");
            })*/
        alert("Email has been sent");
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'forgot-password',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: '../app/components/forgot-password/forgot-password.component.html',
            styleUrls: ['../app/components/forgot-password/forgot-password.component.scss'],
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, shared_service_1.SharedService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map
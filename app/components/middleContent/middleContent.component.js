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
//import { Component } from '@angular/core';
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var tabs_1 = require('ng2-bootstrap/components/tabs');
var accordion_1 = require('ng2-bootstrap/components/accordion');
var alert_1 = require('ng2-bootstrap/components/alert');
var middleContentComponent = (function () {
    function middleContentComponent() {
        this.lastName = "Pawar";
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
        ];
        this.oneAtATime = true;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
    }
    middleContentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    middleContentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    middleContentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    middleContentComponent.prototype.addItem = function () {
        this.items.push("Items " + (this.items.length + 1));
    };
    middleContentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    middleContentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    middleContentComponent = __decorate([
        core_1.Component({
            selector: 'middle-content',
            templateUrl: '../app/components/middleContent/middle-content.html',
            styleUrls: ['../app/components/middleContent/main.scss'],
            directives: [tabs_1.TAB_DIRECTIVES, accordion_1.ACCORDION_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, alert_1.AlertComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], middleContentComponent);
    return middleContentComponent;
}());
exports.middleContentComponent = middleContentComponent;
//# sourceMappingURL=middleContent.component.js.map
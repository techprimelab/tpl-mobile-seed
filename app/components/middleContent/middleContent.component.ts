//import { Component } from '@angular/core';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/components/tabs';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/components/accordion';
import { AlertComponent } from 'ng2-bootstrap/components/alert';

@Component({
    selector: 'middle-content',
    templateUrl: '../app/components/middleContent/middle-content.html',
    styleUrls: ['../app/components/middleContent/main.scss'],
    directives:[TAB_DIRECTIVES, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, AlertComponent]
})
export class middleContentComponent {
    lastName = "Pawar";
    public tabs:Array<any> = [
        {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
        {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
        {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
    ];

    public alertMe():void {
        setTimeout(function ():void {
            alert('You\'ve selected the alert tab!');
        });
    };

    public setActiveTab(index:number):void {
        this.tabs[index].active = true;
    };

    public removeTabHandler(/*tab:any*/):void {
        console.log('Remove Tab handler');
    };

    public oneAtATime:boolean = true;
    public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

    public status:Object = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    public groups:Array<any> = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    public addItem():void {
        this.items.push(`Items ${this.items.length + 1}`);
    }

    public alerts:Array<Object> = [
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

    public closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    }

    public addAlert():void {
        this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
    }
}
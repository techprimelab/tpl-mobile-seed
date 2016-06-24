import {Component} from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'dashboard',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '../app/components/dashboard/dashboard.component.html',
    styleUrls: ['../app/components/dashboard/dashboard.component.scss']
})
export class DashboardComponent {
    
    isClassVisible:boolean = true;
    
    
}
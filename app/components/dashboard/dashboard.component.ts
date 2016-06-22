import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: '../app/components/dashboard/dashboard.component.html',
    styleUrls: ['../app/components/dashboard/dashboard.component.scss']
})
export class dashboardComponent {
    clicked(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("active");
    }
}
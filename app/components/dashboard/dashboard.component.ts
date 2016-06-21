import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: '../app/components/dashboard/dashboard.html',
    styleUrls: ['../app/components/dashboard/dashboard.scss']
})
export class dashboardComponent {
    clicked(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("active");
    }
}
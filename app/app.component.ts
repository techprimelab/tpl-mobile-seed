import { Component } from '@angular/core';
import {loginComponent} from "./components/login/login.component";
import {dashboardComponent} from "./components/dashboard/dashboard.component";
import {loadingComponent} from "./components/loading/loading.component";

@Component({
    selector: 'my-app',
    //template:'<dashboard></dashboard>',
    template:'<login></login>',
    directives: [dashboardComponent, loginComponent,loadingComponent]
})
export class AppComponent {

}

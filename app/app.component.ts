import { Component } from '@angular/core';
import {Routes,ROUTER_DIRECTIVES} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {Registration} from "./components/registration/registration.component";

@Component({
    selector: 'my-app',
    template: `<login></login><router-outlet></router-outlet><form-registration></form-registration>`,
    directives: [ROUTER_DIRECTIVES,LoginComponent]
})

@Routes([

    { path: '/login', component: LoginComponent},
    {path: '/registration', component: Registration}
])

export class AppComponent {


}

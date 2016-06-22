import { Component } from '@angular/core';
import {Routes,ROUTER_DIRECTIVES} from '@angular/router';
import {loginComponent} from "./components/login/login.component";
import {Registration} from "./components/registration/registration.component";

@Component({
    selector: 'my-app',
    template: `<login></login><router-outlet></router-outlet><form-registration></form-registration>`,
    directives: [ROUTER_DIRECTIVES,loginComponent]
})

@Routes([

    { path: '/login', component: loginComponent},
    {path: '/registration', component: Registration}
])

export class AppComponent {}

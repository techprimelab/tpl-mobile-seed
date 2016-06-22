import { Component } from '@angular/core';
import {Routes,ROUTER_DIRECTIVES} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {Registration} from "./components/registration/registration.component";

@Component({
    selector: 'my-app',
    template: `
     <div>
     <a [routerLink]="['/']"></a>
     <router-outlet></router-outlet>
     </div>`,
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/', component: LoginComponent},
    {path: '/login', component: LoginComponent},
    {path: '/registration', component: Registration}
])

export class AppComponent {
}


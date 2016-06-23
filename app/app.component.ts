import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

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
    {path: '/registration', component: RegistrationComponent},
    {path: '/forgotpassword', component: ForgotPasswordComponent},
    {path: '/dashboard', component: DashboardComponent}
])

export class AppComponent {
}


import { Component } from '@angular/core';
import {Registration} from "./components/registration/registration.component";
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `<div>
     <a [routerLink]="['/registration']">register</a>
      <main><router-outlet></router-outlet></main>
     </div>`,
    directives: [ROUTER_DIRECTIVES],
})

@Routes([

    {path: '/registration', component: Registration},

])
export class AppComponent {}

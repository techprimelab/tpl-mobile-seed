import { Component } from '@angular/core';
import {Router,Routes} from '@angular/router';
import {Registration} from "../registration/registration.component";


@Component({
    selector: 'login',
    templateUrl: '../app/components/login/login.component.html',
    styleUrls: ['../app/components/login/login.component.scss']
})

export class LoginComponent {

    constructor(private _router: Router){

    }

    withfacebook(){
        console.log("withfacebookLogin");
    }

    withgoogle(){
        console.log("withGoogleLogin");
    }

    onSignUp(){
        this._router.navigate(['/registration']);
    }

}
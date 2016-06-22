import { Component } from '@angular/core';
import {Router,Routes} from '@angular/router';
import {Registration} from "../registration/registration.component";


@Component({
    selector: 'login',
    templateUrl: '../app/components/login/login.html',
    styleUrls: ['../app/components/login/login.scss']
})

export class loginComponent {

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
import {Component} from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {SharedService} from "../shared/shared.service";

@Component({
    selector: 'login',
    providers: [SharedService],
    templateUrl: '../app/components/login/login.component.html',
    styleUrls: ['../app/components/login/login.component.scss'],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

    userName:String = "";
    password:String = "";
    userNameCtrl:Control;
    userPasswordCtrl:Control;
    loginFormCtrl:ControlGroup;

    constructor(private formBuilder:FormBuilder, private _router:Router, private _login:SharedService) {

        this.userNameCtrl = new Control('', Validators.required);
        this.userPasswordCtrl = new Control('', Validators.required);

        this.loginFormCtrl = formBuilder.group({
            userNameCtrl: this.userNameCtrl,
            userPasswordCtrl: this.userPasswordCtrl,
        });
    }

    onSubmit() {
        this._login.userLogin({userName: this.userName, password: this.password})
            .subscribe(res => {
                alert("call is made");
            })
    }

    loginWithFacebook() {
        console.log("implement task to login with facebook");
    }

    loginWithGoogle() {
        console.log("implement task to login with google");
    }

    onSignUp() {
        this._router.navigate(['/registration']);
    }

    onforgotPassword() {
        this._router.navigate(['/forgotpassword']);
    }

}
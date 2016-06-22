import {Component} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {SharedService} from "../shared/shared.service";

@Component({
    selector: 'login',
    providers: [SharedService],
    templateUrl: '../app/components/login/login.component.html',
    styleUrls: ['../app/components/login/login.component.scss']
})

export class LoginComponent {

    userName:String = "";
    password:String = "";
    username:Control;
    userpassword:Control;
    loginForm:ControlGroup;

    constructor(private formBuilder:FormBuilder, private _router:Router, private _login:SharedService) {

        this.username = new Control('', Validators.required);
        this.userpassword = new Control('', Validators.required);

        this.loginForm = formBuilder.group({
            username: this.username,
            userpassword: this.userpassword,
        });
    }

    onLoginSubmit() {
        this._login.userLogin({userName: this.userName, password: this.password})
            .subscribe(res => {
                alert("call is made");
                //this._router.navigate(['/registration']);
            })
    }
    
    withfacebook() {
        console.log("withfacebookLogin");
    }

    withgoogle() {
        console.log("withGoogleLogin");
    }

    onSignUp() {
        this._router.navigate(['/registration']);
    }

}
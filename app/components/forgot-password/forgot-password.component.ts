import { Component } from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from "@angular/router";
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {SharedService} from "../shared/shared.service";

@Component({
    selector: 'forgot-password',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '../app/components/forgot-password/forgot-password.component.html',
    styleUrls: ['../app/components/forgot-password/forgot-password.component.scss'],
    providers: [SharedService]
})
export class ForgotPasswordComponent {

    userName:String = "";
    userNameCtrl:Control;
    forgotPasswordFormCtrl:ControlGroup;
    constructor(private formBuilder:FormBuilder, private _router:Router, private _login:SharedService) {

        this.userNameCtrl = new Control('', Validators.required);

        this.forgotPasswordFormCtrl = formBuilder.group({
            userNameCtrl: this.userNameCtrl,
        });
    }
    onSubmit() {
        /*this._login.userLogin({userName: this.userName})
            .subscribe(res => {
                alert("call is made");
            })*/
        alert("Email has been sent");
    }
}
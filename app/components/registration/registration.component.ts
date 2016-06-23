import {Component} from '@angular/core';
import {RegistrationService} from "../shared/registration.service";
import {RegistrationItem} from "../shared/registration-item";
import {ControlGroup, Control, FormBuilder, Validators} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CustomValidators} from "../registration/CustomValidators";

@Component({
    selector: 'form-registration',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '../app/components/registration/registration.component.html',
    styleUrls: ['../app/components/registration/registration.component.scss'],
    providers: [RegistrationService, ROUTER_DIRECTIVES]
})

export class RegistrationComponent {

    firstNameCtrl:Control;
    lastNameCtrl:Control;
    emailCtrl:Control;
    conformEmailCtrl:Control;
    passwordCtrl:Control;
    mobileNumberCtrl:Control;
    userFormCtrl:ControlGroup;
    items:RegistrationItem = new RegistrationItem();


    constructor(private formBuilder:FormBuilder, private userService:RegistrationService) {

        this.firstNameCtrl = new Control('', Validators.required);
        this.lastNameCtrl = new Control('', Validators.required);
        this.mobileNumberCtrl = new Control('', Validators.required);
        this.emailCtrl = new Control('', Validators.required, CustomValidators.emailValidator);
        //this.emailCtrl = new Control(['', Validators.compose([Validators.required, CustomValidators.emailValidator])]);
        this.conformEmailCtrl = new Control('', Validators.required);
        this.passwordCtrl = new Control('', Validators.required);

        this.userFormCtrl = formBuilder.group({
            lastNameCtrl: this.lastNameCtrl,
            firstNameCtrl: this.firstNameCtrl,
            mobileNumberCtrl: this.mobileNumberCtrl,
            emailCtrl: this.emailCtrl,
            passwordCtrl: this.passwordCtrl,
            conformEmailCtrl: this.conformEmailCtrl
        });
    }

    onSubmit(item) {
        console.log("register", this.items.firstName);
        this.userService.addNewRegistration(item)
            .subscribe(res => {
                console.log(JSON.stringify(res));
            });
    }
}

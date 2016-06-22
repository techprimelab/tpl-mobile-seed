/**
 * Created by Twinprimelabs on 20/06/16.
 */
import {Component} from '@angular/core';
import {RegistrationService} from "../shared/registration.service";
import {RegistrationItem} from "../shared/registration-item";
import {ControlGroup,Control,FormBuilder, Validators } from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
//import {RegistrationValidation} from "../shared/registration-validation.service";

@Component({
    selector: 'form-registration',
    templateUrl: '/app/components/registration/registration.component.html',
    providers: [RegistrationService]
})

export class Registration {


    private router: Router;
    firstname:Control;
    lastname:Control;
    email:Control;
    conformemail:Control;
    password:Control;
    mobilenumber:Control;
    userForm: ControlGroup;
    items:RegistrationItem = new RegistrationItem();

   
        constructor(private formBuilder: FormBuilder,private userService:RegistrationService) {

            this.firstname = new Control('',Validators.required);
            this.lastname = new Control('',Validators.required);
            this.mobilenumber = new Control('',Validators.required);
            this.email = new Control('',Validators.required);
            this.conformemail = new Control('',Validators.required);
            this.password = new Control('',Validators.required);

            this.userForm = formBuilder.group({
                lastname: this.lastname,
                firstname: this.firstname,
                mobilenumber:this.mobilenumber,
                email:this.email,
                password:this.password,
                conformemail:this.conformemail
            });
        }

    onSubmit(item) {
        console.log("register", this.items.firstName);
        this.userService.addNewRegistration(item)
            .subscribe(res => {
                console.log(JSON.stringify(res));
            });
        console.log("register", this.items.firstName);
    }
    

}

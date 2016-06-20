/**
 * Created by Twinprimelabs on 20/06/16.
 */
import {Component} from '@angular/core';
import {RegistrationItem} from "../shared/registration-item";
import {RegistrationService} from "../shared/registration.service";

@Component({
    selector: 'form-registration',
    templateUrl: '/app/components/registration/registration.component.html',
    providers: [RegistrationService]
})

export class Registration {

    items:Array<RegistrationItem> = new Array<RegistrationItem>();

    constructor(private userService:RegistrationService) {
    }

    formdata(item) {
        console.log("register", this.items.firstName);
        this.userService.addNewRegistration(item)
            .subscribe(res => {
                console.log(JSON.stringify(res));
            });
        console.log("register", this.items.firstName);
    }

    withfacebook(){
        console.log("withfacebookLogin");
    }

    withgoogle(){
        console.log("withGoogleLogin");
    }

}

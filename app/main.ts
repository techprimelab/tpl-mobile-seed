import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";





bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_DIRECTIVES]) 
    .then(success=>console.log("success botstrapping"))
    .catch(error=>console.log("error occured while bootstrapping"));



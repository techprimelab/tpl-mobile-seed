import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent,[HTTP_PROVIDERS]) 
    .then(success=>console.log("success botstrapping"))
    .catch(error=>console.log("error occured while bootstrapping"));

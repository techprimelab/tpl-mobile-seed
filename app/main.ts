import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';

bootstrap(AppComponent)
    .then(success=>console.log("success botstrapping"))
    .catch(error=>console.log("error occured while bootstrapping"));

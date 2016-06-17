import { Component } from '@angular/core';

import {middleContentComponent} from "./components/middleContent/middleContent.component";
import {headerComponent} from "./components/header/header.component";
import {footerComponent} from "./components/footer/footer.component";
@Component(
    {
        selector: 'my-app',
        template: `<header></header>
                   <middle-content></middle-content>
                   <footer></footer>
                   `,
        directives : [headerComponent, footerComponent, middleContentComponent]
    }
)
export class AppComponent { }

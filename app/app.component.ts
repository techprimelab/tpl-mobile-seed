/// <reference path="../node_modules/typescript/lib/jquery.d.ts"/>
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First angular  2 App{{student.name}}</h1>'

})
export class AppComponent {
student={
    name:"roshan",
    height:56
};
}

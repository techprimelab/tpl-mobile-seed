/// <reference path="../../node_modules/typescript/lib/jquery.d.ts"/>
import { Component,ViewChild} from '@angular/core';
import {MyService } from '../services/app.myservice';//importing a module
import {MyComponent} from './app.mycomponent';

//component metadata -describes component
@Component({
    selector: 'my-app',
    templateUrl: '../app/templates/component.html',
    providers:[MyService],//define services needed to component
    directives:[MyComponent]//tells that  this component has some child components
})
export class AppComponent {//to make it importable we must give export keyword
    //define services here in constructor
    amount:number=67;
@ViewChild(MyComponent)
    child1:MyComponent;
    private items:number;
    constructor(
        private _myservice:MyService
    ){
            this.items=10;
    }
     collegeName:string="sdfdf";
link1="https://www.gstatic.com/webp/gallery3/2.png";
 student=[{
    name:"roshan",
    height: 34.6786876,
     fees:200
},{
    name:"sda",
        height: 3.567576,
     fees:200
},{
    name:"asd",
        height: 34.5656,
     fees:200
}];
    appname="Get BIll";
    color="red";

    clicked(event){
        console.log("click");
        console.log(this._myservice.getTotal());
        this.child1.totalItems=this.items++;
        this.child1.showItems();
    }   
    blur(event){
    console.log("blur");
    }   
    mouseenter(event){
    console.log("enter");
    }

    changed(message:string){
        console.log(message);
    }
}


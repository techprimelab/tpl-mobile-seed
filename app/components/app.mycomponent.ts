/**
 * Created by roshan on 16/6/16.
 */
import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import {Control, ControlGroup, Validators,FormBuilder} from "@angular/common";
@Component({
    selector: 'my-comp',
    templateUrl:'../app/templates/listcomponent.html',
    styleUrls:['../app/css/listcomponent.css']
})
export class MyComponent implements OnInit {
    @Output() changed=new EventEmitter<string>();
    @Input() fullname:string;
    username :Control;
    form :ControlGroup;
    isSelected:Boolean=true;
    totalItems=500;
    showBox:Boolean=true;
    constructor(private builder:FormBuilder){
        this.username=new Control('',Validators.required);
        this.username=new Control('',Validators.minLength(5));
        this.username=new Control('',Validators.maxLength(10));
        this.showItems();
        this.form = builder.group({
            username: this.username
        });
    }
    showItems(){
        console.log("items"+this.totalItems); 
    }
    emp={
        name:"roshan",
        height:56
    };
    ngOnInit(){
       console.log(this.fullname);
    }
    select(){
        this.changed.emit("hey its me, your child...");
    }

}

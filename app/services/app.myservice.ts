/**
 * Created by roshan on 16/6/16.
 */
import {Injectable} from  '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class MyService{
    constructor (private _http:Http){}
    getTotal(){
        return 678;
    }
    getUser1(){
        this._http.get("http://date.jsontest.com")
            .map(res=>res.json())
    }
}
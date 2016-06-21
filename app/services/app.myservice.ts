/**
 * Created by roshan on 16/6/16.
 */
import {Injectable} from  '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Rx"
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {error} from "util";

@Injectable()
export class MyService{
    constructor (private _http:Http){}
    getTotal(){
        return 678;
    }
    getUser1(){
        return this._http.get("http://jsonplaceholder.typicode.com/users")
            .map(res=>res.json())
    }
    testJson(){
        var json=JSON.stringify({var1:'test',var2:3});
        var param='json='+json;
        var headers=new Headers();
        headers.append('content-type','application/x-www-form-urlencoaded');
        return this._http.post('http://validate.jsontest.com',param,{headers:headers})
        .map(res=>res.json())
        .do(data=>console.log(data))
        .catch (this.handleError);

    }
    handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}
///<reference path="../../../node_modules/rxjs/add/operator/catch.d.ts"/>
/**
 * Created by Twinprimelabs on 22/06/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()

export class SharedService {

    constructor(private http:Http) {
    }

    userLogin(value) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://validate.jsontest.com', JSON.stringify(value), headers)
            .map(res => res.json())
            .catch(this.handleError)

    }
    handleError(res:Response) {
        console.log(res);
        return Observable.throw(res.json().error || 'server error');
    }

}
/**
 * Created by Twinprimelabs on 22/06/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import "rxjs/add/operator/map";

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
    }

}
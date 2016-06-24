/**
 * Created by Twinprimelabs on 17/06/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/Rx";
import {Observable} from 'rxjs/Observable';

@Injectable()

export class RegistrationService {

    constructor(private http:Http) {
    }

    addNewRegistration(item) {

        console.log("service", item.firstName);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://validate.jsontest.com', JSON.stringify(item), headers)
            .map(res => res.json())
            .catch(this.handleError)
    }

    handleError(res:Response) {
        console.log(res);
        return Observable.throw(res.json().error || 'server error');
    }
}
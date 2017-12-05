import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Application } from '../application';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApplicationService {
    constructor(private http: Http) { }
    getApplicaton() {
        return this.http.get('api/SampleData/GetApplicaton')
            .toPromise()
            .then(result => {
                return result.json() as Application[]
            })
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('Произошла обишка: ', error);
        return Promise.reject(error.message || error)
    }
    getApplicatonCategory() {
        return this.http.get('api/SampleData/GetApplicatonCategory')
            .toPromise()
            .then(result =>
            {
                return result.json() as string[]
            })
            .catch(this.handleError);
    }
    createApplicaton(nameApp: string,nameCategory: string) {
        let headers = new Headers({ 'Content-Type': 'application/json;' });
        let options = new RequestOptions({ headers });
        this.http.post('api/SampleData/CreateApplicaton', {Name: nameApp,Category: nameCategory}, options).toPromise();
    }
    createCategory(nameCategory: string) {
        let headers = new Headers({ 'Content-Type': 'application/json;' });
        let options = new RequestOptions({ headers });
        this.http.post('api/SampleData/CreateCategory', {Category: nameCategory }, options).toPromise();
    }
    searchAppByName(nameApp: string) {
        let headers = new Headers({ 'Content-Type': 'application/json;' });
        let options = new RequestOptions({ headers });
        return this.http.post('api/SampleData/SearchAppByName', { Name: nameApp }, options);
    }
    searchAppByCategory(nameCategory: string) {
        let headers = new Headers({ 'Content-Type': 'application/json;' });
        let options = new RequestOptions({ headers });
        return this.http.post('api/SampleData/SearchAppByCategory', { Category: nameCategory }, options);
    }
}

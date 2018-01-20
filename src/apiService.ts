import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';

@Injectable()
export class LocationService {
    apiRoot:string = 'https://badmap-api.mvrater.com/api/locationinfolist';
    results:Object[];
    loading:boolean;
    constructor(private http:Http) { 
        this.results = [];
        this.loading = false;
    } 
    getLocationList() {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}`;
            this.http.get(apiURL)
              .toPromise()
              .then(
                res => { // Success
                  this.results = res.json();
                  console.log(this.results);
                  resolve();
                }
              );
        });
        return promise;
    }
}

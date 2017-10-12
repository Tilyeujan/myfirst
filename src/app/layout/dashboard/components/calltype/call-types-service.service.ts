import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {promise} from "selenium-webdriver";

@Injectable()
export class CallTypesServiceService {
    private _callTypes: Array<any> = [];

    constructor(private _http: HttpClient) {

    }


    getCallTypeJson(e){
        var promise = new Promise(((resolve, reject) => {
            try{
                this._http.get('http://localhost:4200/assets/json/' + e).subscribe(
                    data => {
                        // Read the result field from the JSON response.
                        this._callTypes = data['result'];

                        resolve();
                    },
                    err => {
                        console.log("Error occured.")
                    });
            }catch (ex){
                console.log(ex);
                reject();
            }
        }));

        return promise;
    }


    get callTypes(): Array<any> {
        return this._callTypes;
    }

    set callTypes(value: Array<any>) {
        this._callTypes = value;
    }
}

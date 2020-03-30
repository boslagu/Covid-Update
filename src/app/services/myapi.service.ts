
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class myApiService{
    constructor(private httoclient: HttpClient){}
    getcomments(): Observable<any>{
        // return this.httoclient.get("https://coronavirus-ph-api.now.sh/cases");
        return this.httoclient.get("https://coronavirus-ph-api.herokuapp.com/cases");
        
    }
}
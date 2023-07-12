import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://10.166.64.241:8080/column-lineage';

  getAllData():Observable<any>{
    console.log("Inside this.get");
    return this._http.get(this.apiUrl);
  }
}

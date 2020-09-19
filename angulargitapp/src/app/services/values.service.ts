import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  public $obser: Subject<string>;

  constructor(private _http:Http) { 
    this.$obser = new Subject<string>();
  }

  public getValues(): Observable<any> {
    return this._http.get('http://localhost:2057/api/values');
  }

  public getValuesDynamic(option:string): Observable<any> {
    return this._http.get(`http://localhost:2057/api/values/get${option}`);
  }

}

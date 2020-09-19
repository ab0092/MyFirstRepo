import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServicesService {

  constructor() { }

  public add(...numbers:number[]): number {
    let Result = 0;
    numbers.forEach((e)=> Result += e);
    return Result;
  }
}

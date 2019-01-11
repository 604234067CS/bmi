import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BniProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BniProvider Provider');
  }

    bmiCalculate(height:number,weight:number) {
      return(weight/height)/height;
    }

}

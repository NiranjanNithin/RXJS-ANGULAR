import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { 
   
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/productsInfo")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

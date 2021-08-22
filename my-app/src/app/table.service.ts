import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) {}

  getRows():Observable<any>{
      const url = "https://moneytor.in/resources/data/sample.json"
      return this.http.get<any>(url)
  }



}

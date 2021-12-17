import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http:HttpClient) { }
  //url of top headlines news
    topheadlinenews="https://newsapi.org/v2/top-headlines?country=in&apiKey=ea5f23c3ae034c819c9bb2bfc8df7064"
    bussinessNews="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea5f23c3ae034c819c9bb2bfc8df7064"
    techNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ea5f23c3ae034c819c9bb2bfc8df7064"
    sportNews="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ea5f23c3ae034c819c9bb2bfc8df7064"
    //asynchronous data
    topHeadline():Observable<any>{
      //return observable
      return this.http.get(this.topheadlinenews);
    }
    bussiness():Observable<any>{
      //return observable
      return this.http.get(this.bussinessNews);
    }
    sport():Observable<any>{
      //return observable
      return this.http.get(this.sportNews);
    }
    technology():Observable<any>{
      //return observable
      return this.http.get(this.techNews);
    }



}

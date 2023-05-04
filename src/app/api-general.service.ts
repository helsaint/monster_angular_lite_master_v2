import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGeneralService {

  constructor(private http:HttpClient) { }

  getPlayers(){
    //return this.http.get('https://restcountries.com/v3.1/all');
    return this.http.get('https://dashboards.aramotar.com/sofifa_api/sofifa_general_stats_api');
  }
}
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private _eventUrl = "http://localhost:3000/events"
  private _specialUrl = "http://localhost:3000/special"

  constructor( private http: HttpClient) { }

  getEvent(){
    return this.http.get<any>(this._eventUrl)
  }

  getSpecial(){
    return this.http.get<any>(this._specialUrl)
  }
}

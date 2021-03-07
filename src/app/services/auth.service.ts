import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/register"
  private _loginUrl = "http://localhost:3000/login"

  constructor( private http: HttpClient) { }
  
  
  registerUsers(user: any){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUsers(user: any){
    return this.http.post<any>(this._loginUrl, user)

  }
}

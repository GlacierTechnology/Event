import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  httpClient:HttpClient) { }
  public VerifyUser(inputObj:any){
    let signupUrl = 'https://localhost:44374/Login/Login';
    return this.httpClient.post(signupUrl,inputObj);
  }
  public VerifyEmail(inputObj:any){
    let signupUrl = 'https://localhost:44374/Login/VerifyEmail';
    return this.httpClient.post(signupUrl,inputObj);
  }
}

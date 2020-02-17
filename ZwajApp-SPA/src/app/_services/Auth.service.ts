import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
 
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44301/api/auth/';
constructor(private http:HttpClient) { }

login(model: any) {
  //pipe  تم استخدامه لان هناك قيمة راجعة
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) { 
        localStorage.setItem('token', user.token);}}))
}

register(model:any){
  //model  يقصد به  الجيسون ابجكت المرسل
  return this.http.post(this.baseUrl+'Register',model);

}
}

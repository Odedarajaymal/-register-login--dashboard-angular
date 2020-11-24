import { Injectable } from '@angular/core';
import {User} from './user';
import {tap} from 'rxjs/operators';
import {Observable, of,throwError} from "rxjs";
import {catchError,} from 'rxjs/operators';
import {HttpClient, HttpClientModule, HttpErrorResponse,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
 Signup(user): Observable<User> {
    return this.http.post<User>('http://localhost:5050/signup', user, this.hederoption).pipe(tap(data => console.log(data),err => console.log(err)),   catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }));
 }
 
 Signin(user): Observable<User> {
  return this.http.post<User>('http://localhost:5050/signin', user, this.hederoption).pipe(tap(data => this.Authencate(data),err => console.log(err.error)), catchError((err) => {
    console.log('error caught in service')
    console.error(err);

    //Handle the error here

    return throwError(err);    //Rethrow it back to component
  }))

}
private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
}

 hederoption = {
   headers: new HttpHeaders({
      Accept: 'application/json',
     'Content-Type': 'application/json',
      responseType: 'text',
      
   })
 }
 
 Authencate(jwt:User){
  if(typeof window !== 'undefined'){
    localStorage.setItem('jwt',JSON.stringify(jwt))
    
 }
 }

    
}

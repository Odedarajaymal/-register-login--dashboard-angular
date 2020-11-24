import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from './product-interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

 getProducts():Observable<Product[]>{
   return  this.http.get<Product[]>('http://localhost:5050/showalluser',this.hederoption)
 } 

 hederoption = {
  headers: new HttpHeaders({
     Accept: 'application/json',
    'Content-Type': 'application/json',
     responseType: 'text',
     Authorization:`Bearer ${this.authenticate().token}`,
  })
}

authenticate(){
  if(typeof window == 'undefined'){
    return false
}
if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'))
} else{
    return false
}
}
} 
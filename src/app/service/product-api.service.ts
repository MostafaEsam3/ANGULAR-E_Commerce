import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
   return this.http.get<any>('https://dummyjson.com/products')
  }

  getDetails(id : any){
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
  }


}

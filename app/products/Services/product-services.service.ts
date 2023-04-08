import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private httpClient:HttpClient) { }
  getAllProduct():Observable<any[]>{
    // return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/Products`)
    return this.httpClient.get<any[]>(`${environment.APIURL}/Product/GetAllProduct`)
  }
  getProductById(id:any):Observable<Product>{
    // return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/Products`)
    return this.httpClient.get<Product>(`${environment.APIURL}/Product/GetProductyById/${id}`)
  }
  GetProductByCatId(id:number):Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.APIURL}/Product/GetProductyById?id=${id}`);
  }
}

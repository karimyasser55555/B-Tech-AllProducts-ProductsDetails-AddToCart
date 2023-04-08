import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpClient : HttpClient) { }

  GetAllCateogories():Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.APIURL}/Category/GetAllCategory`)
    //return this.httpClient.get<any[]>(environment.APIURL +'categories')
  }


  // GetAllCateogories():Observable<ICategory[]>{
  //   return this.httpClient.get<ICategory[]>("http://localhost:3000/categories")
  //  }


  //  GetCategoryByCatId(catid:number):Observable<ICategory>{
  //   return this.httpClient.get<ICategory>(`http://localhost:3000/categories?id=${catid}`);
  // }
}

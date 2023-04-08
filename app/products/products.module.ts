import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from  '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsofcategoryComponent } from './Components/productsofcategory/productsofcategory.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductsofcategoryComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory : httpTranslateLoader,
        deps:[HttpClient]
      }
    })

  ],

  providers: [],



})
export class ProductsModule { }
export function httpTranslateLoader(http:HttpClient){
  return new  TranslateHttpLoader(http,'./assets/i18n/','.json')
  //D:\ITI FULL STACK .NET\final project\FrontEndAngular\B-Tech\src\assets\i18n\ar.json
}

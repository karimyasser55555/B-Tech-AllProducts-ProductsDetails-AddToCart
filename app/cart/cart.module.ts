import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from  '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
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
export class CartModule { }
export function httpTranslateLoader(http:HttpClient){
  return new  TranslateHttpLoader(http,'./assets/i18n/','.json')
  //D:\ITI FULL STACK .NET\final project\FrontEndAngular\B-Tech\src\assets\i18n\ar.json
}

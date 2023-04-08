import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from  '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    FormsModule,
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



export class AuthModule { }
export function httpTranslateLoader(http:HttpClient){
  return new  TranslateHttpLoader(http,'./assets/i18n/','.json')
}

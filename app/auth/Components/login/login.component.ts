import { Component, inject, OnInit } from '@angular/core';




import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:string =""
  Password:string =""
  isErorr:Boolean=false;
  currentCulture: string ;
  searchLanguage: string="ar";

    constructor(private route: Router
      ,public translate: TranslateService ) {
        this.currentCulture = 'en';

       }
    ngOnInit(): void {
      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.currentCulture = event.lang;
      });
    }
  SignIn(){


  }
}

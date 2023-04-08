import { Component, OnInit,Input,OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CategoryServiceService } from 'src/app/products/Services/category-service.service';
import { ProductServicesService } from 'src/app/products/Services/product-services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

   catlist?:any[]=[];
  SelectedCatId: number = 0;
  currentCulture: string;

  searchLanguage: string="en";
  constructor(
  private productService: ProductServicesService,
    public translate: TranslateService,
    private route: Router,
    private CategoryService:CategoryServiceService,
  ) {
    this.currentCulture = 'en';
  }

  ngOnInit(): void {
    this.GetCategories()
    // this.categoryApiService.GetAllCateogories()
    //   .subscribe((list) => (this.catlist = list));

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentCulture = event.lang;
    })

  }
  GetCategories() {
    this.CategoryService.GetAllCateogories().subscribe((res:any)=>{
      this.catlist=res;
      console.log(this.catlist)
    })
}
  

  OpenPrdByCatId(catid: number) {
    this.route.navigate(['Productsofcategory', catid]);
  }

  // filterByName(item: string) {
  //   var english = /^[A-Za-z0-9]*$/;

  //   if (english.test(item)) {
  //   this.searchLanguage="en";
  //     this.searchItems = this.prdOfferlist.filter((b) =>
  //      b.nameEN.toUpperCase().includes(item.toUpperCase())
  //     );
  //   } else {
  //     this.searchLanguage="ar";

  //     this.searchItems = this.prdOfferlist.filter((b) =>
  //     b.nameAR.toUpperCase().includes(item.toUpperCase())
  //     );
  //   }

  //   if (item == "" || item.length == 0) {
  //     this.searchItems = [];
  //   }

  // }
  // search(search: string){
  //   this.route.navigate(['Search',search])
  // }
}

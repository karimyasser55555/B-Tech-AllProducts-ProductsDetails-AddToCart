import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CategoryServiceService } from '../../Services/category-service.service';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ProductServicesService } from '../../Services/product-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
//@NgModule({imports: [CommonModule]})
export class AllProductsComponent implements OnInit {
  // filterProductList: any[] = [];
  url: string = environment.ImageURl
  inputPrice:number=0 ;
 currentCulture: string;
 categories:any[]=[];
 products:any[]=[];
 num:any[]=[1,2,3,4,5];
  constructor(private CategoryService:CategoryServiceService,private route:Router,private translate: TranslateService,private ProductService:ProductServicesService) {
    this.currentCulture = 'en';
   }

  ngOnInit(): void {
   this.GetCategories()
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentCulture = event.lang;
    });
    this.GetProducts()
  }
  GetProducts(){
      this.ProductService.getAllProduct().subscribe((res:any)=>{
        this.products=res;
        console.log(this.products)
      } ,error=>{
        console.log(error)
       //console.log(error.message)
      }
      )
    }
  GetCategories() {
    this.CategoryService.GetAllCateogories().subscribe((res:any)=>{
      this.categories=res;
      console.log(this.categories)
    } ,error=>{
      console.log(error)
     //console.log(error.message)
    }
    )
}
OpenPrdDetails(prdID:number){
  console.log(prdID);

  this.route.navigate(['ProductDetails',prdID])//
}

AddToCart(prd:number)
{
  Swal.fire('Done', 'You Add Success', 'success');

}

  // OpenPrdDetails(prdID:number){
  //   this.route.navigate(['productdetails',prdID])
  // }

  // AddToCart(prd:number)
  // {
  //   Swal.fire('Done', 'You Add Success', 'success');

  // }

  filterProduct()
  {

  }

  filterByName(item:string)
  {

  }

}

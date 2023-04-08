import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ProductServicesService } from '../../Services/product-services.service';
import { Product } from 'src/app/Models/product';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // prd!: Product;

  url: string = environment.ImageURl
  currentPrdID: number = 0;
  mainImage: string = environment.ImageURl;
  currentCulture: string;
  products:any[]=[];
  constructor(
    private activedRoute: ActivatedRoute,
    private translate: TranslateService,
    private location: Location,
    private productService: ProductServicesService,
    private route:Router
  ) {
    this.currentCulture = 'en';
  }
   product!:Product;
   items:Product[] = [];
   AddToCart(product: Product) {
    let storedItems = JSON.parse(localStorage.getItem('orderItems') || '[]') as Product[];
    let updated = false;

    for (let item of storedItems) {
      if (item.id === product.id) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
        updated = true;
        break;
      }
    }

    if (!updated) {
      product.quantity = 1;
      product.totalPrice = product.price * product.quantity;
      storedItems.push(product);
    }

    localStorage.setItem('orderItems', JSON.stringify(storedItems));

    Swal.fire('Done', 'You Add Success', 'success');
  }
  //  AddToCart(product :any)
  //  {
  //   const storedItems = JSON.parse(localStorage.getItem('orderItems') || '[]') as Product[];
  //   storedItems.push(product);
  //   localStorage.setItem('orderItems', JSON.stringify(storedItems));
  //    // id => server add to card
  //    Swal.fire('Done', 'You Add Success', 'success');

  //  }
  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductById(id).subscribe({
      next:(product)=>{
        console.log(product);
        this.product = {
          id:id,
          nameArabic:product.nameArabic,
          discArabic:product.discArabic,
          discount:product.discount,
          imagePath:environment.ImageURl+ product.imagePath,
          name:product.name,
          discription:product.discription,
          price:product.price,
          quantity: product.quantity,
          totalPrice: product.totalPrice

        }
        this.mainImage+=product.imagePath;
        console.log(this.product);






      },
      error:(err)=>{
      console.log(err);

      }
    })
    // call backend service to get details

    ;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentCulture = event.lang;
    });

  }
  prevPage() {
    this.location.back();
  }
}


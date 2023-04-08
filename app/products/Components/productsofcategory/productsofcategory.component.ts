import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from '../../Services/product-services.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.css']
})
export class ProductsofcategoryComponent implements OnInit{

  currentprodID:number=0;
constructor(private activatedRoute:ActivatedRoute,private productservice:ProductServicesService,private location:Location,private route:Router){ }
prod:any|undefined=undefined;
  ngOnInit(): void {
    //let productID=this.activatedRoute.snapshot.paramMap.get('prdID');
this.currentprodID= (this.activatedRoute.snapshot.paramMap.get('catid'))?Number(this.activatedRoute.snapshot.paramMap.get('catid')):0;
let ReturnedProd=this.productservice.GetProductByCatId(this.currentprodID);
alert(this.currentprodID)
if(ReturnedProd){
this.prod=ReturnedProd;

}
else{
alert("Not Found")
}
  }


}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';
import { CartComponent } from './cart/Components/cart/cart.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { TestComponent } from './Components/test/test.component';
import { ProductsofcategoryComponent } from './products/Components/productsofcategory/productsofcategory.component';

const routes: Routes = [
  { path: 'Products', component: AllProductsComponent },
  { path: 'ProductDetails/:id', component: ProductDetailsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Acount', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Productsofcategory/:catid', component: ProductsofcategoryComponent },

  { path: '**', redirectTo: 'Products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

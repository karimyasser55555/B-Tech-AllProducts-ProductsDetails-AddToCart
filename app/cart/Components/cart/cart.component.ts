import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges{
  currentCulture: string;
  length: number = 0;
  items:Product[] = [];
  public TotalPrice: number | undefined ;
  totalprice: number[] = [];
  constructor(
    private translate: TranslateService,
    private route: Router,

  ) {
    this.currentCulture = 'en';
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.calcTotalPrice()
  }
  ngOnInit(): void {
// this.loadCart()
  this.getItems();
  // console.log(this.getItems())
  console.log('in card ',this.items);
  this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    this.currentCulture = event.lang;
  });
  this.length = this.items.length;
  }
  getItems() {
    this.items = this.loadCart();
    let tempItems = [];

    for (let item of this.items) {
      let index = tempItems.findIndex(i => i.id === item.id);

      if (index >= 0) {
        // add to the existing item's quantity and total price
        tempItems[index].quantity += item.quantity;
        tempItems[index].totalPrice += item.totalPrice;
      } else {
        // add the new item to the temporary array
        tempItems.push(item);
      }
    }

    this.items = tempItems;
    return this.items;
  }

  loadCart() {
    const item = window.localStorage.getItem("orderItems");
    const cart = item ? JSON.parse(item) : [];

    for (let product of cart) {
      product.quantity = product.quantity || 1;
      product.totalPrice = product.price * product.quantity;
    }
console.log(cart)
    return cart;
  }
  addToCart(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);

    if (index >= 0) {
      // product already exists in cart
      this.items[index].quantity++;
      this.items[index].totalPrice = this.items[index].quantity * this.items[index].price;
    } else {
      // product is new to cart
      product.quantity = 1;
      product.totalPrice = product.price;
      this.items.push(product);
    }

    localStorage.setItem('orderItems', JSON.stringify(this.items));
  }

  removeItem(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);

    if (index >= 0) {
      this.items.splice(index, 1);
      localStorage.setItem('orderItems', JSON.stringify(this.items));
    }
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('orderItems');
  }
  // calcTotalPrice() {
  //   let totalPrice = 0;
  //   for (let i = 0; i < this.items.length; i++) {
  //   this.items[i].totalPrice = this.items[i].quantity * this.items[i].price;
  //     totalPrice += this.items[i].quantity * this.items[i].totalPrice;
  //   }
  //   this.TotalPrice = totalPrice;
  // }
  calcTotalPrice() {
    this.TotalPrice = 0;
    for (const i of this.items) {
      this.TotalPrice += i.quantity * i.totalPrice;
    }
  }
  // calcTotalPrice() {
  //   let totalPrice = 0;
  //   for (let i = 0; i <= this.items.length; i++) {
  //     this.items[i].totalPrice = this.items[i].quantity * this.items[i].price;
  //     totalPrice += this.items[i].totalPrice;
  //   }
  //   this.TotalPrice = totalPrice;
  //   localStorage.setItem('orderItems', JSON.stringify(this.items));
  // }
}
// calcTotalPrice() {
//   let totalPrice = 0;
//   for (let item of this.items) {
//     totalPrice += item.totalPrice;
//   }
//   this.TotalPrice = totalPrice;
// }

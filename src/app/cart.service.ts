import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []
  constructor(
    private http: HttpClient
  ) { }
  addToCart(product){
    this.items.push(product)
  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items = []
    return this.items
  }
  getShippingPrices(){
    // 定義  HttpClient 的 get() method 來檢視配送資料
    return this.http.get('/assets/shipping.json');
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../product';
import {CartService} from '../cart.service'; // 匯入購物車 service

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    // ActivatedRoute 專門用於由 Angular 路由器載入的每個路由元件
    private cartService: CartService,
    // 注入購物車 service
  ) { }

  addToCart(product){
    this.cartService.addToCart(product);
    console.log('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    // 訂閱路由引數，並且根據 productId 獲取該產品
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')];
    })
  }

}

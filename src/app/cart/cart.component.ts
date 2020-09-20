import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; // FormBuilder 提供語法糖簡化 FormControl、FormGroup、FormArray 實例的建立
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; // 儲存表單類型
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // 建立 FormGroup instance 以蒐集使用者姓名、地址
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  //處理表單
  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    // 重 FormGroup
    console.log('reset', customerData)
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}

import { Component, OnInit } from '@angular/core';
import  {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //定義一個帶 @Input() 裝飾器的 product 屬性，product 會對應到 component 實例化時的屬性上 
                    // <app-product-alerts [product]="product"></app-product-alerts>
                    // [product] 為屬性繫結，是傳入物件
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

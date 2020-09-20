import {Component} from '@angular/core';
import {products} from '../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{
    products = products;
    share(){
        console.log('this product has been shared');
    }
    onNotify(){
        console.log('You will be notified when the product goes on sale')
    }
}
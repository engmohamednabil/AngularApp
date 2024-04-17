import { Component } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: IProduct[];

  constructor() {
    this.products = [{
      id: 555,
      name: "This is a test product with lower price!",
      price: 100.5
    },{
      id: 666,
      name: "This is a better product",
      price: 270
    }]
  }
}

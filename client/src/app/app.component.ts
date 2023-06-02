import { Component } from '@angular/core';
import { Iproduct } from 'src/interface/product';
import { ProductService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Iproduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}

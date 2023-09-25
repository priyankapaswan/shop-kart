import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public categories!: string[];
  public products!: Product[];

  constructor(private apiService: ApiServiceService) {
    apiService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

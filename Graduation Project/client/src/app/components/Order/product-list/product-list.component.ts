import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';

import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  preoductListOfCat: IProduct[] = [];

  constructor(
    private productservice: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((products) => {
      this.preoductListOfCat = products;
      //console.log(this.preoductListOfCat);
    });
  }
  ngOnChanges(): void {
    throw new Error('Method not implemented.');
  }
}

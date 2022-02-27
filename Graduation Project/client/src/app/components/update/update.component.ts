import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

import { ProductsService } from 'src/app/Services/products.service';
import { ICategory } from 'src/models/icategory';
import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productService: ProductsService,
    private catservice: CategoriesService
  ) {}
  val: any;

  product: IProduct = {} as IProduct;
  catlist: ICategory[] = [];
  ngOnInit(): void {
    let sub = this.route.params.subscribe((params) => {
      this.val = params['id'];
    });

    this.productService.getProductupdate(this.val).subscribe((data) => {
      this.product = data;
    });
    this.catservice.getAllCat().subscribe((pro) => {
      this.catlist = pro;
    });
  }
  //// fetchcategories() {

  // }
  update(id: any, product: IProduct) {
    this.productService.updateProduct(id, product).subscribe((data) => {});
    this.router.navigate(['/dashboard']);
  }
}

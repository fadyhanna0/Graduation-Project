import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ICategory } from 'src/models/icategory';
import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  //catList: ICategory[];
  productlistofcat: IProduct = {} as IProduct;
  productlist: IProduct[] = [];
  catservice: any;
  catList: { id: number; name: string }[];
  catlist(catlist: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private prodService: ProductsService, public router: Router) {
    this.catList = [
      { id: 1, name: 'chairs' },
      { id: 2, name: 'tables' },
      { id: 7, name: 'bed' },
      { id: 8, name: 'kitchen' },
      { id: 9, name: 'living room' },
    ];
  }

  ngOnInit(): void {
    //this.fetchProducts();
    this.catservice.getAllCat().subscribe((pro: (catlist: any) => void) => {
      this.catlist = pro;
    });
  }

  fetchProducts() {
    this.prodService.getAllProducts().subscribe((products) => {
      this.productlist = products;
    });
  }

  // addproduct(data: any) {
  //   this.prodService.addProduct(this.productlistofcat).subscribe((data: {}) => {
  //     this.router.navigate(['/product']);
  //   });
  // }

  addproduct() {
    const observer = {
      next: (prd: IProduct) => {
        alert('Product added Successfuly');
        this.router.navigateByUrl('/products');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };

    this.prodService.addProduct(this.productlistofcat).subscribe(observer);
  }
}

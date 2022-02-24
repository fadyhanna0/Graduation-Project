import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Input() proObj = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    category_Id: 0,
  };
  productlistofcat: IProduct[] = [];
  constructor(private prodService: ProductsService, public router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.prodService.getAllProducts().subscribe((products) => {
      this.productlistofcat = products;
    });
  }

  addproduct(data: any) {
    this.prodService.addProduct(this.proObj).subscribe((data: {}) => {
      this.router.navigate(['/products']);
    });
  }
  delete(proid: number) {
    if (window.confirm('Really?')) {
      this.prodService.deleteProduct(proid).subscribe((products) => {
        this.fetchProducts();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productlist: IProduct[] = [];

  constructor(private prodService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.prodService.getAllProducts().subscribe((products) => {
      this.productlist = products;
    });
  }
  // delete(pro: number) {
  //   if (window.confirm('Are you sure ')) {
  //     this.prodService.deleteProduct(pro).subscribe((res) => {
  //       this.fetchProducts();
  //     });
  //   }
  // }
  deleteproduct(pro: number) {
    if (window.confirm('are you sure ')) {
      this.prodService.deleteProduct(pro).subscribe((data) => {});
      this.prodService.getAllProducts().subscribe((Response) => {
        this.productlist = Response;
      });
    }
  }
  updateproduct(id: number) {
    this.router.navigate(['/update', id]);
  }
}

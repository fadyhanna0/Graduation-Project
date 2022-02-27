import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    category_Id: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}

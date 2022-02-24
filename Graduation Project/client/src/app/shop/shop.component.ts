import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/models/icategory';
import { CategoriesService } from '../Services/categories.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  catlist: ICategory[] = [];
  constructor(private catServicee: CategoriesService) {}

  ngOnInit(): void {
    this.catServicee.getAllCat().subscribe((category) => {
      this.catlist = category;
      console.log(category);
    });
  }
}

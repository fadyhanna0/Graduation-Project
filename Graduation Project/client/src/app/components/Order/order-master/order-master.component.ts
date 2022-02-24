import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ICategory } from 'src/models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements OnInit {
  catList: ICategory[] = [];
  constructor(private catService: CategoriesService) {}

  ngOnInit(): void {}
}

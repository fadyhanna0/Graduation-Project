import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from '../components/product-item/product-item.component';

@NgModule({
  //import shop component
  declarations: [ShopComponent, ProductItemComponent],
  imports: [CommonModule],
  //export shop component
  exports: [ShopComponent],
})
export class ShopModule {}

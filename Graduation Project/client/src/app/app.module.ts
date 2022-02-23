import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

import { ShopModule } from './shop/shop.module';
=======
>>>>>>> a38507afa269bba814752508668c71eb178c14c2
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/Login-Register/login/login.component';
import { RegisterComponent } from './components/Login-Register/register/register.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
<<<<<<< HEAD
import { OrderMasterComponent } from './components/Order/OrderMaster/order-master/order-master.component';
import { ProductDetailsComponent } from './components/Order/order-master/order-master/order-master.component';
import { ProdutDetailsComponent } from './components/Order/produt-details/produt-details.component';
import { LoginComponent } from './components/loginAndRigister/login/login.component';
import { RegisterComponent } from './components/loginAndRigister/register/register.component';
=======
import { SideBarComponent } from './components/side-bar/side-bar.component';


>>>>>>> a38507afa269bba814752508668c71eb178c14c2

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainLayoutComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    ordermaster,
=======
    OrderMasterComponent,
    ProductItemComponent,
    ProductListComponent,
    SideBarComponent
   
>>>>>>> a38507afa269bba814752508668c71eb178c14c2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
<<<<<<< HEAD
    //import core module which nav-bar lives in

    //import shop module which products lives in
    ShopModule,
=======
>>>>>>> a38507afa269bba814752508668c71eb178c14c2
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

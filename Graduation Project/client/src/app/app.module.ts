import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { UsersComponent } from './components/loginAndRigister/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './components/Order/OrderMaster/order-master/order-master.component';
import { ProductDetailsComponent } from './components/Order/productDetails/product-details/product-details.component';
import { ProdutDetailsComponent } from './components/Order/produt-details/produt-details.component';
import { LoginComponent } from './components/loginAndRigister/login/login.component';
import { RegisterComponent } from './components/loginAndRigister/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainLayoutComponent,
    NotFoundComponent,
    OrderComponent,
    SideBareComponent,
    UsersComponent,
    HomeComponent,
    DirectivesDirective,
    ProductListComponent,
    OrderMasterComponent,
    ProductDetailsComponent,
    ProdutDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //import core module which nav-bar lives in
    CoreModule,
    //import shop module which products lives in
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

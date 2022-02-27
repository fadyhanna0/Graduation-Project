import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

import { RegisterComponent } from './components/Login-Register/register/register.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';

import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductsDirecrtivesDirective } from './Directives/products-direcrtives.directive';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './components/Login-Register/reset-password/reset-password.component';
import { LoginComponent } from './components/Login-Register/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateComponent } from './components/update/update.component';
import { ProductComponent } from './components/Order/product/product.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    FooterComponent,
    MainLayoutComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    OrderMasterComponent,
    ResetPasswordComponent,
    ProductListComponent,
    SideBarComponent,
    ProductsDirecrtivesDirective,
    CurrencyPipe,
    NavBarComponent,
    AddProductComponent,
    DashboardComponent,
    UpdateComponent,
    ProductComponent,
 

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

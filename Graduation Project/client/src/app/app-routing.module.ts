import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { pathToFileURL } from 'url';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/Login-Register/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/Login-Register/register/register.component';
// import { ResetPasswordComponent } from './components/login-Register/reset-password/reset-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { ProductDetailsComponent } from './components/Order/product-details/product-details.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ResetPasswordComponent } from './components/Login-Register/reset-password/reset-password.component';
import { AddProductComponent } from './components/add-product/add-product.component';
// import { LoginComponent } from './components/loginAndRigister/login/login.component';
// import { RegisterComponent } from './components/loginAndRigister/register/register.component';
// import { ProductListComponent } from './components/Order/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'product/add', component: AddProductComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetpass', component: ResetPasswordComponent },
  { path: '**', component: NotFoundComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Rigester', component: RegisterComponent },
  // { path: 'order', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

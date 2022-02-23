import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ContactsComponent } from './components/contacts/contacts.component';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> db94bbd41dde036714d66a45823ef76ed5dd074a
//import { pathToFileURL } from 'url';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './shop/shop.component';
// import { LoginComponent } from './components/loginAndRigister/login/login.component';
// import { RegisterComponent } from './components/loginAndRigister/register/register.component';
// import { ProductListComponent } from './components/Order/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'shop', component: ShopComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Rigester', component: RegisterComponent },
  // { path: 'order', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

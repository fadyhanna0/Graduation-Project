import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { pathToFileURL } from 'url';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/loginAndRigister/login/login.component';
// import { RegisterComponent } from './components/loginAndRigister/register/register.component';
// import { ProductListComponent } from './components/Order/product-list/product-list.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Rigester', component: RegisterComponent },
  // { path: 'order', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

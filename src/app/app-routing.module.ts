import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard} from './auth.guard';
import {BackGuard} from './back.guard'
const routes: Routes = [
  {path: '', redirectTo:'/signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path:'signin', component:SigninComponent, canActivate:[BackGuard]},
  {path:'product', component: ProductListComponent,  canActivate:[ AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
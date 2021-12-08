import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'mobile',component:MobileComponent},
    {path:'laptop',component:LaptopComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { DeliverymenListComponent } from './components/deliverymen-list/deliverymen-list.component';
import { SecretaryComponent } from './components/secretary/secretary.component';

const routes: Routes = [
  // {
  //   path: 'deliverymenList',
  //   component: DeliverymenListComponent,

  // },
 { 
   path:'routing',
   component:SecretaryComponent,
  },
  { 
    path:'addOrder',
    component: AddOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

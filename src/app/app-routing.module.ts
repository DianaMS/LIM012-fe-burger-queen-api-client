import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';

import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminProductsComponent } from './views/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './views/admin/admin-orders/admin-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: AuthComponent },
  { path: 'admin-main', component: AdminMainComponent},
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'users', component: AdminUsersComponent},
      { path: 'products', component: AdminProductsComponent},
      { path: 'orders', component: AdminOrdersComponent}
    ]
  },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

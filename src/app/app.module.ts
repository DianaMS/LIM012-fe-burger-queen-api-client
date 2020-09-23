import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { OptionOrdersComponent } from './components/option-orders/option-orders.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminProductsComponent } from './views/admin/admin-products/admin-products.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminOrdersComponent } from './views/admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    OptionOrdersComponent,
    HeaderAdminComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    AdminComponent,
    AdminMainComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

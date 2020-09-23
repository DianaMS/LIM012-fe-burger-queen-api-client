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
import { MainAdminComponent } from './components/main-admin/main-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    OptionOrdersComponent
    HeaderAdminComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

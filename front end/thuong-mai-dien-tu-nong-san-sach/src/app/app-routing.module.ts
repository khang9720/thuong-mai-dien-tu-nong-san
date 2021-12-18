import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccountComponent } from './components/account/account.component'
import { CartComponent } from './components/cart/cart.component'
import { DetailOrderComponent } from './components/detail-order/detail-order.component'
import { DetailsProductComponent } from './components/details-product/details-product.component'
import { EditInfoComponent } from './components/edit-info/edit-info.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { OrderListComponent } from './components/order-list/order-list.component'
import { PasswordUpdateComponent } from './components/password-update/password-update.component'
import { PhoneUpdateComponent } from './components/phone-update/phone-update.component'
import { RegisterComponent } from './components/register/register.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: DetailsProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'edit-info', component: EditInfoComponent },
  { path: 'account', component: AccountComponent },
  { path: 'phone-update', component: PhoneUpdateComponent },
  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'detail-order', component: DetailOrderComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

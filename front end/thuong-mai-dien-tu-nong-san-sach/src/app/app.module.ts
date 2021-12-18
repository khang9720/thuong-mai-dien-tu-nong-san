import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzStepsModule } from 'ng-zorro-antd/steps'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CartComponent } from './components/cart/cart.component'
import { DetailsProductComponent } from './components/details-product/details-product.component'
import { EditInfoComponent } from './components/edit-info/edit-info.component'
import { FooterComponent } from './components/footer/footer.component'
import { HearderComponent } from './components/hearder/hearder.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { PhoneUpdateComponent } from './components/phone-update/phone-update.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HearderComponent,
    RegisterComponent,
    HomeComponent,
    DetailsProductComponent,
    CartComponent,
    EditInfoComponent,
    AccountComponent,
    PhoneUpdateComponent,
    PasswordUpdateComponent,
    OrderListComponent,
    DetailOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NzButtonModule, NzStepsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

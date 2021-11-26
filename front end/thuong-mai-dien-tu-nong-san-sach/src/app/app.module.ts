import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { HearderComponent } from './components/hearder/hearder.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsProductComponent } from './components/details-product/details-product.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HearderComponent,
    RegisterComponent,
    HomeComponent,
    DetailsProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

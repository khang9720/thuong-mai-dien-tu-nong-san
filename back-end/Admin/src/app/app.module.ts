import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './Page/menu/menu.component';
import { FotterComponent } from './Page/fotter/fotter.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TypeproductComponent } from './typeproduct/typeproduct.component';
import { ProducterComponent } from './producter/producter.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  { path: '', component: LoginAdminComponent },
  { path: 'index',component: IndexComponent},
  { path: 'product',component:ProductComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'type',component:TypeproductComponent},
  { path: 'producter',component:ProducterComponent},
  { path: 'staff' ,component:StaffComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    IndexComponent,
    MenuComponent,
    FotterComponent,
    ProductComponent,
    RegisterComponent,
    TypeproductComponent,
    ProducterComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDzIaHlMhofWNYr-vMiVThEEE6_I8wsJvM",
      authDomain: "test-img-fa3b9.firebaseapp.com",
      databaseURL: "https://test-img-fa3b9-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "test-img-fa3b9",
      storageBucket: "test-img-fa3b9.appspot.com",
      messagingSenderId: "692235491474",
      appId: "1:692235491474:web:e3d29fcfd5fc2e8c0cee4b",
      measurementId: "G-QT2GBXKBGB"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

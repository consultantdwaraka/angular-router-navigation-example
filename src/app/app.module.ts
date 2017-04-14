import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AlertModule } from 'ngx-bootstrap';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';

import { HomeRoutingModule } from './home/home-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { PrimaryComponent } from './home/primary.component';
import { SuccessComponent } from './home/success.component';
import { HomeDefaultComponent } from './home/home-default.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrimaryComponent,
    SuccessComponent,
    HomeDefaultComponent,
    HomeDefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    HomeRoutingModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

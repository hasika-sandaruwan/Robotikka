import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginItemsPageComponent } from './components/login-page/inner-items/login-items-page/login-items-page.component';
import { SignUpItemsPageComponent } from './components/login-page/inner-items/sign-up-items-page/sign-up-items-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CookieModule} from "ngx-cookie";


@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginItemsPageComponent,
    SignUpItemsPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    CookieModule.forRoot()
  ]
})
export class AuthModule { }

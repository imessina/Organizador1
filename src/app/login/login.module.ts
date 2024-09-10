import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { RecuperarPasswordModule } from '../recuperar-password/recuperar-password.module'; //

import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RecuperarPasswordModule,
    MatProgressBarModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecuperarPasswordComponent } from './recuperar-password.component';

@NgModule({
  declarations: [RecuperarPasswordComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RecuperarPasswordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega esta línea si es necesario
})
export class RecuperarPasswordModule {}

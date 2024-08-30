import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
})
export class RecuperarPasswordComponent {
  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

  recuperar() {
    alert('Se ha enviado un enlace para recuperar la contraseña.');
    this.close();
  }
}

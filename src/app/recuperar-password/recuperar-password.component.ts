import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss'],
})
export class RecuperarPasswordComponent {
  usuario: string = '';
  email: string = '';

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

  recuperar() {
    if (this.emailValido()) {
      alert('Se ha enviado un enlace para recuperar la contraseña a ' + this.email);
      this.close();
    } else {
      alert('Por favor, introduzca un correo electrónico válido.');
    }
  }

  emailValido(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    return regex.test(this.email);
  }
}

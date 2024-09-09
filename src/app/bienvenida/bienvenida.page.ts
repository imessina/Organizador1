import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  nombreUsuario: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Obtener el nombre del usuario desde localStorage
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Invitado';
    this.presentToast(`Bienvenido ${this.nombreUsuario}`);
  }

  logout() {
    // Limpiar el nombre del usuario de localStorage
    localStorage.removeItem('nombreUsuario');
    this.router.navigate(['/login']); // Redirige al login
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000, // Duración en milisegundos
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Toast cerrado');
          }
        }
      ]
    });
    await toast.present();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecuperarPasswordComponent } from '../recuperar-password/recuperar-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  password: string = '';
  rating: number = 0; // Calificación seleccionada
  hoveredRating: number = 0; // Calificación mientras se pasa el mouse
  mensajeVisible: boolean = false; // Mostrar mensaje de agradecimiento por 3 segundos
  isLoading: boolean = false; // Controla la visibilidad de la barra de progreso

  constructor(private router: Router, private modalController: ModalController) {}

  login() {
    this.isLoading = true; // Mostrar la barra de progreso
  
    setTimeout(() => { // Simular un proceso de validación
      if (this.validarPassword(this.password)) {
        // Navegar a la página de bienvenida pasando el nombre de usuario como parámetro
        this.router.navigate(['/bienvenida'], { queryParams: { usuario: this.usuario } });
      } else {
        alert('Usuario o contraseña no válidos.');
      }
  
      this.isLoading = false; // Ocultar la barra de progreso
    }, 2000); // Simular un tiempo de validación de 2 segundos
  }

  validarPassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*[0-9]{4})(?=.*[a-zA-Z]{3}).{8}$/;
    return regex.test(password);
  }

  async openRecuperarPassword() {
    const modal = await this.modalController.create({
      component: RecuperarPasswordComponent
    });
    return await modal.present();
  }

  // Métodos para la calificación
  rate(stars: number) {
    this.rating = stars;
    this.mensajeVisible = true; // Mostrar mensaje de agradecimiento

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      this.mensajeVisible = false;
    }, 3000);
  }

  setHoveredRating(stars: number) {
    this.hoveredRating = stars;
  }

  resetHoveredRating() {
    this.hoveredRating = 0;
  }

  openRegistro() {
    this.router.navigate(['/registro']);
  }
}

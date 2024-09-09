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

  // Lista de usuarios válidos
  usuariosValidos: { usuario: string, contraseña: string, nombre: string }[] = [
    { usuario: 'Admin', contraseña: 'Duoc2024', nombre: 'Administrador' },
    { usuario: 'FelipeE', contraseña: 'Duoc2024', nombre: 'Felipe Echeverria' },
    { usuario: 'IgnacioM', contraseña: 'Duoc2024', nombre: 'Ignacio Messina' }
  ];

  constructor(private router: Router, private modalController: ModalController) {}

  login() {
    const usuarioEncontrado = this.usuariosValidos.find(u => u.usuario === this.usuario && u.contraseña === this.password);
    
    if (usuarioEncontrado) {
      // Guardar el nombre del usuario en localStorage
      localStorage.setItem('nombreUsuario', usuarioEncontrado.nombre);
      this.router.navigate(['/bienvenida']);
    } else {
      alert('Usuario o contraseña no válidos.');
    }
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
}

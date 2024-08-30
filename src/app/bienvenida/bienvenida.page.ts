import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  constructor(private router: Router) {} // Inyecta el Router

  logout() {
    // Aquí puedes limpiar cualquier estado de autenticación si es necesario
    this.router.navigate(['/login']); // Redirige al login
  }
}

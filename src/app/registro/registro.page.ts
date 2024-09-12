import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  edad: number = 0;
  correo: string = '';
  sexo: string = '';

  constructor(private router: Router) {}

  registrar() {
    // Aquí podrías agregar lógica para guardar los datos, por ahora solo muestra un alert
    alert('Registro exitoso');
    
    // Redirigir al login
    this.router.navigate(['/login']);
  }
}

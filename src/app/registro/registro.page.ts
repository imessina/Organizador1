import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements AfterViewInit {
  nombre: string = '';
  edad: number = 0;
  correo: string = '';
  sexo: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.applyJQueryValidations();
  }

  applyJQueryValidations() {
    // Validar nombre: Solo letras y no vacío
    $('#nombre').on('input', (event) => {
      const valor = $(event.target).val() as string;
      const nombreValido = /^[a-zA-Z\s]+$/.test(valor);
      if (valor.trim() === '') {
        $('#error-nombre').text('El nombre no puede estar vacío.').show();
      } else if (!nombreValido) {
        $('#error-nombre').text('El nombre solo puede contener letras.').show();
      } else {
        $('#error-nombre').hide();
      }
    });

    // Validar edad: Solo números, máximo 2 dígitos y no vacío
    $('#edad').on('input', (event) => {
      const valor = $(event.target).val() as string;
      const edadValida = /^\d{1,2}$/.test(valor);
      if (valor.trim() === '') {
        $('#error-edad').text('La edad no puede estar vacía.').show();
      } else if (!edadValida) {
        $('#error-edad').text('La edad debe ser un número de hasta 2 dígitos.').show();
      } else {
        $('#error-edad').hide();
      }
    });

    // Validar correo: Formato válido de email y no vacío
    $('#correo').on('input', (event) => {
      const valor = $(event.target).val() as string;
      const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
      if (valor.trim() === '') {
        $('#error-correo').text('El correo no puede estar vacío.').show();
      } else if (!correoValido) {
        $('#error-correo').text('El formato de correo no es válido.').show();
      } else {
        $('#error-correo').hide();
      }
    });
  }

  registrar() {
    // Mostrar un mensaje de éxito si todo es válido
    alert('Registro exitoso, se te ha enviado un correo de confirmación.');
    this.router.navigate(['/login']);
  }
}

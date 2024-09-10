import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  nombreUsuario: string = 'Invitado';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtener el nombre del usuario desde los parámetros de la ruta
    this.route.queryParams.subscribe(params => {
      this.nombreUsuario = params['usuario'] || 'Invitado';
    });
  }

  logout() {
    // Redirigir al login cuando se cierra la sesión
    this.router.navigate(['/login']);
  }
}

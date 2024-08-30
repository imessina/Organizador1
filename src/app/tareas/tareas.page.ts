import { Component } from '@angular/core';

interface Tarea {
  titulo: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  tareas: Tarea[] = [];

  addTarea() {
    const titulo = prompt('Ingrese el título de la tarea:');
    if (titulo) {
      this.tareas.push({ titulo });
    }
  }

  editTarea(tarea: Tarea) {
    const nuevoTitulo = prompt('Editar título de la tarea:', tarea.titulo);
    if (nuevoTitulo) {
      tarea.titulo = nuevoTitulo;
    }
  }

  deleteTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
  }
}

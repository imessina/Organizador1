import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Tarea {
  titulo: string;
  contenido: string;
  fecha: string; // La fecha será una cadena en formato 'YYYY-MM-DD'
  prioridad: 'Bajo' | 'Medio' | 'Alto'; // Prioridad como texto
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  tareas: Tarea[] = [];

  constructor(private alertController: AlertController) {}

  async agregarTarea() {
    const alert = await this.alertController.create({
      header: 'Nueva Tarea',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Título'
        },
        {
          name: 'contenido',
          type: 'text',
          placeholder: 'Contenido'
        },
        {
          name: 'fecha',
          type: 'date',
          placeholder: 'Fecha'
        },
        {
          name: 'prioridad',
          type: 'text',
          placeholder: 'Prioridad (Bajo, Medio, Alto)',
          value: '' // Valor por defecto
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Agregar',
          handler: (data: any) => {
            const prioridades = ['Bajo', 'Medio', 'Alto'];
            if (data.titulo && data.contenido && data.fecha && prioridades.includes(data.prioridad)) {
              this.tareas.push({
                titulo: data.titulo,
                contenido: data.contenido,
                fecha: data.fecha,
                prioridad: data.prioridad
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async editarTarea(tarea: Tarea) {
    const alert = await this.alertController.create({
      header: 'Editar Tarea',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: tarea.titulo,
          placeholder: 'Título'
        },
        {
          name: 'contenido',
          type: 'text',
          value: tarea.contenido,
          placeholder: 'Contenido'
        },
        {
          name: 'fecha',
          type: 'date',
          value: tarea.fecha,
          placeholder: 'Fecha'
        },
        {
          name: 'prioridad',
          type: 'text',
          value: tarea.prioridad,
          placeholder: 'Prioridad (Bajo, Medio, Alto)'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data: any) => {
            const prioridades = ['Bajo', 'Medio', 'Alto'];
            if (data.titulo && data.contenido && data.fecha && prioridades.includes(data.prioridad)) {
              tarea.titulo = data.titulo;
              tarea.contenido = data.contenido;
              tarea.fecha = data.fecha;
              tarea.prioridad = data.prioridad;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
  }
}

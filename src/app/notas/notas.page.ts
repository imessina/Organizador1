import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Nota {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage {
  notas: Nota[] = [];

  constructor(private alertController: AlertController) {}

  async agregarNota() {
    const alert = await this.alertController.create({
      header: 'Nueva Nota',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Título'
        },
        {
          name: 'contenido',
          type: 'textarea',
          placeholder: 'Contenido'
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
            this.notas.push(data as Nota);
          }
        }
      ]
    });

    await alert.present();
  }

  async editarNota(nota: Nota) {
    const alert = await this.alertController.create({
      header: 'Editar Nota',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: nota.titulo,
          placeholder: 'Título'
        },
        {
          name: 'contenido',
          type: 'textarea',
          value: nota.contenido,
          placeholder: 'Contenido'
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
            const index = this.notas.indexOf(nota);
            if (index > -1) {
              this.notas[index] = data as Nota;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarNota(nota: Nota) {
    const index = this.notas.indexOf(nota);
    if (index > -1) {
      this.notas.splice(index, 1);
    }
  }
}

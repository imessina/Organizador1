import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Contacto {
  nombre: string;
  telefono: string;
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage {
  contactos: Contacto[] = [];

  constructor(private alertController: AlertController) {}

  async agregarContacto() {
    const alert = await this.alertController.create({
      header: 'Nuevo Contacto',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'telefono',
          type: 'text',
          placeholder: 'Teléfono'
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
            this.contactos.push(data as Contacto);
          }
        }
      ]
    });

    await alert.present();
  }

  async editarContacto(contacto: Contacto) {
    const alert = await this.alertController.create({
      header: 'Editar Contacto',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          value: contacto.nombre,
          placeholder: 'Nombre'
        },
        {
          name: 'telefono',
          type: 'text',
          value: contacto.telefono,
          placeholder: 'Teléfono'
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
            const index = this.contactos.indexOf(contacto);
            if (index > -1) {
              this.contactos[index] = data as Contacto;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarContacto(contacto: Contacto) {
    const index = this.contactos.indexOf(contacto);
    if (index > -1) {
      this.contactos.splice(index, 1);
    }
  }
}

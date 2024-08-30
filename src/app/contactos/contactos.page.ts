import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Contacto {
  nombre: string;
  telefono: string;
  direccion?: string; // Campo opcional
  correo?: string;    // Campo opcional
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
        },
        {
          name: 'direccion',
          type: 'text',
          placeholder: 'Dirección'
        },
        {
          name: 'correo',
          type: 'email',
          placeholder: 'Correo Electrónico'
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
            this.contactos.push({
              nombre: data.nombre,
              telefono: data.telefono,
              direccion: data.direccion,
              correo: data.correo
            } as Contacto);
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
        },
        {
          name: 'direccion',
          type: 'text',
          value: contacto.direccion || '', // Campo opcional
          placeholder: 'Dirección'
        },
        {
          name: 'correo',
          type: 'email',
          value: contacto.correo || '', // Campo opcional
          placeholder: 'Correo Electrónico'
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
              this.contactos[index] = {
                nombre: data.nombre,
                telefono: data.telefono,
                direccion: data.direccion,
                correo: data.correo
              } as Contacto;
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

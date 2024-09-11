import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage {
  notas: { id: number, titulo: string, contenido: string, fecha: Date }[] = [];
  nextId: number = 1;

  @ViewChild('notaElement', { read: ElementRef }) notaElement!: ElementRef;

  constructor(
    private animationCtrl: AnimationController,
    private alertCtrl: AlertController,
    private navCtrl: NavController  // Inyectar NavController para la navegación
  ) {}

  agregarNota() {
    const nuevaNota = {
      id: this.nextId++,
      titulo: `Nota ${this.nextId}`,
      contenido: 'Contenido de la nota',
      fecha: new Date()
    };
    this.notas.push(nuevaNota);
    this.startAnimation();
  }

  async editarNota(nota: { id: number; titulo: string; contenido: string }) {
    const alert = await this.alertCtrl.create({
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
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            nota.titulo = data.titulo;
            nota.contenido = data.contenido;
          }
        }
      ]
    });
    await alert.present();
  }

  eliminarNota(id: number) {
    this.notas = this.notas.filter(nota => nota.id !== id);
  }

  volverInicio() {
    this.navCtrl.navigateBack('/bienvenida');  // Redirigir a la página de inicio
  }

  startAnimation() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.notaElement.nativeElement)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(0)', opacity: '0' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
    
    animation.play();
  }
}

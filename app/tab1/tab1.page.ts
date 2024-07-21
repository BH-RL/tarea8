import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private storage: Storage) {
    this.zainab().then()
  }

  titulo = '';
  fecha = '';
  descripcion = '';
  items :any = [];

  async zainab() {
    await this.storage.create()
  }

  agregar() {
    this.storage.set(this.titulo, [this.fecha, this.descripcion])
    this.items.push({titulo: this.titulo, fecha: this.fecha, descripcion: this.descripcion});

  }

  eliminarTodoContenido() {
    this.items = [];
  }

  eliminartodito() {
    this.storage.clear()
  }

  eliminarcampos(){
    this.titulo = '';
    this.fecha = '';
    this.descripcion = '';
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AgregarProductosPage} from '../pages';
import {ProductosPage} from '../pages';

@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html'
})
export class InventarioPage {


productosTab=ProductosPage;
agregarProductosTab=AgregarProductosPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InventarioPage Page');
  }

}

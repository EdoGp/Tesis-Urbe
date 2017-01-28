import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-agregar-productos',
  templateUrl: 'agregar-productos.html'
})
export class AgregarProductosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AgregarProductosPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AgregarProductos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

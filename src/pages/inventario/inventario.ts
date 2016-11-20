import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Inventario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html'
})
export class InventarioPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InventarioPage Page');
  }

}

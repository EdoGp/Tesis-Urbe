import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Pedidos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PedidosPage Page');
  }

}

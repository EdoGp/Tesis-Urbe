import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Configuracion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html'
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConfiguracionPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Api} from '../../providers/providers';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController,private api:Api) {}

   usuario = {
    "nombre": "",
    "password": "",

    "rif": "",
    "tipo": "",
        "direccion": {
            "direccion": "",
            "ciudad": "",
            "estado": "",
            "pais": ""
        },
        "contacto": {
            "email": "",
            "telefono": ""
        }
}

  ionViewDidLoad() {
    console.log('Hello SignUpPage Page');
  }

  postUsuario(usuario) {
    this.api.postUsuario(usuario).subscribe();
    //console.log(this.usuario)
  }

  

}

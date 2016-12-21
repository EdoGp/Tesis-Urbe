import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import {Api} from '../../providers/providers';
import { Storage } from '@ionic/storage';

import {HomePage} from '../pages';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController,private api:Api,private storage: Storage,private nav: Nav) {}

  nombre="";
  usuario ={};

    getUsuario(nombre) {
    this.api.getUsuario(nombre).subscribe(data =>{this.usuario=data});
    //console.log(this.usuario)
    this.storage.set('name', this.usuario);
    this.storage.get('name').then((val) => {console.log(val)});
    location.reload();

    }

}

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
  password="";
  usuario:any =[];

    getUsuario(nombre,password) {
    this.api.getUsuario(nombre,password).subscribe(data =>{this.usuario=data.data});
    console.log(this.usuario)
    
    if(this.usuario!=null)
    {
      this.storage.set('name', this.usuario);
      this.storage.get('name').then((val) => {console.log(val)});
      location.reload();
    }
    

    }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../pages';
import {SignUpPage} from '../pages';
import * as globals from '../../global/variables';
import {Api} from '../../providers/providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios:any=[];
  productos:any=[];
  pedidos:any=[];

  loginTab= LoginPage;
  signUpTab= SignUpPage;
  logIn = globals.logIn;
  logOut = globals.logOut;
  
  constructor(public navCtrl: NavController, private api:Api) {

  }

  ionViewDidLoad()
  {
   this.api.getUsuario().subscribe(data =>{this.usuarios=data.data});
   this.api.getProducto().subscribe(data =>{this.productos=data.data});
   this.api.getPedido().subscribe(data =>{this.pedidos=data.data});
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../pages';
import {SignUpPage} from '../pages';
import * as globals from '../../global/variables';
import {Api} from '../../providers/providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(public navCtrl: NavController, private api:Api,private storage: Storage) {}

  usuarios:any=[];
  productos:any=[];
  pedidos:any=[];
  
  loginTab= LoginPage;
  signUpTab= SignUpPage;
  logIn = "";
  

  ionViewDidLoad()
  {
   this.storage.get('name').then((val) => {this.logIn=val});
   this.api.getProducto().subscribe(data =>{this.productos=data.data});
   this.api.getPedido().subscribe(data =>{this.pedidos=data.data});
  }

}
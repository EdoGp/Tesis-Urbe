import { Component,ViewChild} from '@angular/core';
import {Nav,Platform} from 'ionic-angular';
import {StatusBar,Splashscreen} from 'ionic-native';

import {HomePage} from '../pages/pages';
import {InventarioPage} from '../pages/pages';
import {PedidosPage} from '../pages/pages';

import * as globals from '../global/variables';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  cliente=globals.cliente;
  empresa=globals.empresa;
  transporte=globals.transporte;

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goInventario(){
    this.rootPage = InventarioPage;
    this.nav.popTo(InventarioPage);
  }
   goHome(){
    this.rootPage = HomePage;
    this.nav.popTo(HomePage);
  }
   goPedidos(){
    this.rootPage = PedidosPage;
    this.nav.popTo(PedidosPage);
  }

}


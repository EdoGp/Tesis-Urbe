import { Component,ViewChild} from '@angular/core';
import {Nav,Platform} from 'ionic-angular';
import {StatusBar,Splashscreen} from 'ionic-native';

import { HttpModule  } from '@angular/http';
import { Api  } from '../providers/providers';

import {HomePage,InventarioPage,PedidosPage,AfiliacionPage,ConfiguracionPage} from '../pages/pages';

import * as globals from '../global/variables';

import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html',
  providers:[HttpModule,Api]
})
export class MyApp {

  cliente=globals.cliente;
  empresa=globals.empresa;
  transporte=globals.transporte;

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private storage:Storage) {
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

    goAfiliacion(){
    this.rootPage = AfiliacionPage;
    this.nav.popTo(AfiliacionPage);
  }

     goConfiguracion(){
    this.rootPage = ConfiguracionPage;
    this.nav.popTo(ConfiguracionPage);
  }

  logOut(){
    this.storage.clear();
    location.reload();
  }

}


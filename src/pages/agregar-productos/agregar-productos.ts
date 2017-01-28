import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/providers';

@Component({
  selector: 'page-agregar-productos',
  templateUrl: 'agregar-productos.html'
})
export class AgregarProductosPage {

  constructor(public navCtrl: NavController, private api:Api) {}
  producto = {
    "Producto": "",
        "id_usuario":  "",
        "nombre":      "",
        "descripcion": "",
        "existencia":  "",
        "costo":       ""
  }
  ionViewDidLoad() {
    console.log('Hello AgregarProductosPage Page');
  }

  postProducto(producto){
    this.api.postProductp(producto).suscribe();
    //console.log(this.producto);
  }
}

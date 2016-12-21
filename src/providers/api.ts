import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/observable';


@Injectable()
export class Api {

  private baseUrl = "http://localhost:3000";

  usuario= {};
  productos: any = [];
  pedidos: any = [];

  constructor(public http: Http) {}

//get

  getUsuario(nombre): Observable < any >{

    return this.http.get(`${this.baseUrl}/usuario/${nombre}`).map((response: Response) => {
      this.usuario = response.json();
      return this.usuario;
    });
  }
  getProducto(): Observable < any > {

    return this.http.get(`${this.baseUrl}/producto`).map((response: Response) => {
      this.productos = response.json();
      return this.productos;
    });
  }
  getPedido(): Observable < any > {

    return this.http.get(`${this.baseUrl}/pedido`).map((response: Response) => {
      this.pedidos = response.json();
      return this.pedidos;
    });
  }

  

//Post

  postProducto(producto) {

   let body =JSON.stringify(producto);

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.baseUrl + "/producto", body, options)
      .map(res => res.json(), this.handleError);

  }

  postUsuario(usuario) {
  
    let body =JSON.stringify(usuario);

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.baseUrl + "/usuario", body, options)
      .map(res => res.json(), this.handleError);

  }

//error

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

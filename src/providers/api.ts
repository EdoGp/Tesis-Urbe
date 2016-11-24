import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from'rxjs/observable';


@Injectable()
export class Api {

  private baseUrl="http://localhost:3000";

  usuarios:any=[];
  productos:any=[];
  pedidos:any=[];

  constructor(public http: Http) {}


  getUsuario(): Observable<any>{

    return this.http.get(`${this.baseUrl}/usuario`).map((response:Response)=>{
        this.usuarios=response.json();
        return this.usuarios;
    });
  }
    getProducto(): Observable<any>{

    return this.http.get(`${this.baseUrl}/producto`).map((response:Response)=>{
        this.productos=response.json();
        return this.productos;
    });
  }
    getPedido(): Observable<any>{

    return this.http.get(`${this.baseUrl}/pedido`).map((response:Response)=>{
        this.pedidos=response.json();
        return this.pedidos;
    });
  }
   
}

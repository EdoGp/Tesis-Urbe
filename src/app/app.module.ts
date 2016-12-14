import { NgModule} from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AfiliacionPage,AgregarProductosPage,HomePage,InventarioPage,LoginPage,PedidosPage,ProductosPage,SignUpPage,ConfiguracionPage} from '../pages/pages';



@NgModule({
  declarations: [
    MyApp,
    AgregarProductosPage,
    AfiliacionPage,
    HomePage,
    InventarioPage,
    LoginPage,
    PedidosPage,
    ProductosPage,
    SignUpPage,
    ConfiguracionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgregarProductosPage,
    AfiliacionPage,
    HomePage,
    InventarioPage,
    LoginPage,
    PedidosPage,
    ProductosPage,
    SignUpPage,
    ConfiguracionPage
  ],
  providers: []
})
export class AppModule {}

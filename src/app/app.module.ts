import { NgModule} from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AfiliarPage } from '../pages/pages';
import { AgregarProductosPage } from '../pages/pages';
import { HomePage } from '../pages/pages';
import { InventarioPage } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { PedidosPage } from '../pages/pages';
import { ProductosPage } from '../pages/pages';
import { SignUpPage } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    AfiliarPage,
    AgregarProductosPage,
    HomePage,
    InventarioPage,
    LoginPage,
    PedidosPage,
    ProductosPage,
    SignUpPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AfiliarPage,
    AgregarProductosPage,
    HomePage,
    InventarioPage,
    LoginPage,
    PedidosPage,
    ProductosPage,
    SignUpPage
  ],
  providers: []
})
export class AppModule {}

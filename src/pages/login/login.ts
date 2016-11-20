import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../pages';

import * as globals from '../../global/variables';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

}

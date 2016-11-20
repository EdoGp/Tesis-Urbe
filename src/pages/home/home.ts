import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../pages';
import {SignUpPage} from '../pages';
import * as globals from '../../global/variables';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginTab= LoginPage;
  signUpTab= SignUpPage;
  logIn = globals.logIn;
  logOut = globals.logOut;
  
  constructor(public navCtrl: NavController) {

  }

}

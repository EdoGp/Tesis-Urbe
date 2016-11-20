import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../pages';
import {SignUpPage} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginTab= LoginPage;
  signUpTab= SignUpPage;
  in = false;
  out = true;
  

  constructor(public navCtrl: NavController) {

  }

}

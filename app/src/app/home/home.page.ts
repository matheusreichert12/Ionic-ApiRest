import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public router: Router) { }

  openCreateAccount() {

    this.router.navigate(['/create-account']);
  }

  openLogin() {
    this.router.navigate(['/login']);
  }

  openListUsers() {
    this.router.navigate(['/user-list']);
  }
}

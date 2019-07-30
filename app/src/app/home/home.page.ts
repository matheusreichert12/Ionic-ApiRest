import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  openCreateAccount() {
    this.navCtrl.navigateRoot("CreateAccountPage");
  }

  openLogin() {
    this.navCtrl.navigateRoot("LoginPage");
  }

  openListUsers() {
    this.navCtrl.navigateRoot("UserListPage");
  }
}

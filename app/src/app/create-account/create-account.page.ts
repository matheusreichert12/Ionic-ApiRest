import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { UsersService } from '../users.service';

import { Usuario } from '../models/usuario-model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  constructor(private userService: UsersService, public alertController: AlertController) {
  }

  model = {};

  ngOnInit() {

  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  createAccount() {
    const obj =
      Object.assign({}, this.model) as Usuario;

    this.userService.save(obj).subscribe(
      (result) => {
        this.presentAlert("Salvo com Sucesso", "Usuário: " + obj.nomeusuario);

      }, (error: HttpErrorResponse) => {

        if (error.status == 400) {

          alert('Erro ao salvar Usuário! Erro:' + error.error);
        } else {
          alert('Erro ao salvar Usuário!');
        }
      }
    );
  }
}
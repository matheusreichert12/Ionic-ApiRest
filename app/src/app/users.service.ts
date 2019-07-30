import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './models/usuario-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  public save(usuario: Usuario): Observable<any> {
    return this.http
      .post("https://aw-petshop-api.herokuapp.com/usuario", usuario)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'https://reqres.in/api/';

  constructor(public http: HttpClient) { }

  createAccount(email: string, password: string) {
    return new Promise((resolve, reject) => {

      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'register', data).subscribe((result: any) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json());
      })
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {

      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'login', data).subscribe((result: any) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json());
      })
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users?per_page=10&page=' + page;

      this.http.get(url).subscribe((result: any) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json());
      })
    });
  }
}

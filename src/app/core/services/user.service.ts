import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private Http: HttpClient) { }

  getUsers() {
    return this.Http.get('http://localhost:4200/api/users');
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {

  constructor(private Http: HttpClient) { }

  login(data) {
    return this.Http.post('http://localhost:4200/api/login',data);
  }

  register(data) {

    return this.Http.post('http://localhost:4200/api/register',data);
  }

  user(): string {
    return localStorage.getItem('token');
  }

  userData()
  {
      return jwt.decode(localStorage.getItem('token'))
  }
}

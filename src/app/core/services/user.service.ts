import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class UserService {

  constructor(private Http: HttpClient) { }

  getUsers() {
    return this.Http.get(`${environment.url}/api/users`);
  }
}

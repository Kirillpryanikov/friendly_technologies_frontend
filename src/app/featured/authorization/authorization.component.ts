import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  Errors:any = {
    data:[],
    title: ''
  };
  constructor(
    private Router: Router,
    private AuthService: AuthService
  ) { }

  ngOnInit() {

  }

  login(form:NgForm) {
    let body = form.value;

    if(body.email.length > 3 && body.password.length > 0) {
      this.AuthService.login(body).subscribe(data => {
        let Response:any = data;
        localStorage.setItem('token', Response.token);

        this.Router.navigate(['/']);
      }, errors => {
        this.Errors = {data: [], title:''};
        this.Errors.title = 'Login error'
        this.Errors.data.push({
          message: errors.error.error
        })
      })
    } else {
      this.Errors = {data: []};
      this.Errors.title = 'Login error'
      this.Errors.data.push({
        message: '`email`, `password` should be more than 3 symbols'
      })
    }
  }

  register(form:NgForm) {
    let body = form.value;
    console.log(body);
    if(body.name.length > 0 && body.email.length > 3 && body.password.length > 3) {

      if(body.password != body.repeat_password) {
        this.Errors = {data: []};
        this.Errors.title = 'Register error'
        this.Errors.data.push({
          message: '`password` and `repeat_password` must be the same'
        })
        return;
      }

      
      this.AuthService.register(body).subscribe(data => {
        let Response:any = data;
        localStorage.setItem('token', Response.token);
        this.Router.navigate(['/']);
      }, errors => {
        console.log()
        this.Errors = {data: [], title:''};
        this.Errors.title = 'Register error'
        this.Errors.data.push({
          message: errors.error.error
        })
      })
    } else {
      this.Errors = {data: []};
      this.Errors.title = 'Register error'
      this.Errors.data.push({
        message: '`email`, `password` should be more than 3 symbols'
      })
    }
  }

  testBtnHandler() {
    toast('Hello',1000);
  }
}

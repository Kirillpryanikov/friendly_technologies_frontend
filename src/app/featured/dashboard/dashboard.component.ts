import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  User:any;
  Users:any;
  constructor(
    private Router: Router,
    private UserService: UserService,
    private AuthService: AuthService
  ) { }

  ngOnInit() {
    this.User = this.AuthService.userData();
    console.log(this.User)
    this.UserService.getUsers().subscribe(users => {
      this.Users = users;
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.Router.navigate(['/login'])
  }
}

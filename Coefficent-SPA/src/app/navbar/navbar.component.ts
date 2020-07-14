import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show : boolean = true;
  loggedin : boolean = false;
  tokenLocal : any;
  @Output() loginPressed = new EventEmitter();

  loginP() {
    this.loginPressed.emit(false);
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.success('Logged out...');
    this.router.navigate(['/']);
  }



  constructor(public auth: AuthService,
    public user: UserService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.tokenLocal = this.auth.getToken();

    this.user.username = this.tokenLocal.unique_name;
  
  }

}

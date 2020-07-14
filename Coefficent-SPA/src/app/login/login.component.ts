import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  signup: boolean = false;
  

  @Output() emitCancel = new EventEmitter();

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private user: UserService
  ) { }

  cancel() {
    this.emitCancel.emit();

  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfull!!!');
      this.user.username = this.authService.getToken().unique_name;
      this.cancel();
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/']);
    }
    );
  }




  loggedIn() {
    return this.authService.loggedIn();
  }



  ngOnInit() {
  }

}

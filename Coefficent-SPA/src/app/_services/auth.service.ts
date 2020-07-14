import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { UtilityService } from './utility.service';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  decodedToken: any;


constructor(
  private http: HttpClient,
  private tool: UtilityService,
) { }

  login(model: any) {
    return this.http.post(this.tool.baseUrl + 'auth/' + 'login', model)
      .pipe(          // Map the response to http request pipeline to do things after it
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);  // Add the token to client side local storage
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
    }

  register(model: any) {
  return this.http.post(this.tool.baseUrl + 'auth/' + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken() {
    const token = localStorage.getItem('token');


    return this.jwtHelper.decodeToken(token);

  }


}

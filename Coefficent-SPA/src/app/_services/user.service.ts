import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilityService } from './utility.service';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userD: User;
  username: string;

  constructor(
    private http: HttpClient,
    private tools: UtilityService
    ) { }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.tools.baseUrl + 'users/' + id);
  }
}

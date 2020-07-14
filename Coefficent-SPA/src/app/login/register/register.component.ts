import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any = {};
  confirmPass : string;
  @Output() cancelRegister = new EventEmitter();
  @Output() totalCancelEmit = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.cancelRegister.emit();
  }

  totalCancel() {
    this.totalCancelEmit.emit();
  }


  register() {
    if (this.confirmPass != this.model.password)
    {
      this.alertify.warning('Passwords do not match.')
      return;
    }
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registed successfully!!!');
    }, error => {
      this.alertify.error(error);
    });
  }


}

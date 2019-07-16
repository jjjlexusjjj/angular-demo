import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  userForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onLogin(value: {username: string, password: string}): void {
    this.auth.login(value)
      .subscribe();
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  submitted = false;
  userForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  onLogin(value: {email: string, password: string}): void {
    this.submitted = true;
    this.auth.login(value)
      .subscribe(() => this.router.navigate(['/']), e => this.handleError(e));
  }

  private handleError(e: {code: string, message: string}): void {
    this.submitted = false;
    if (e.code === '') {

    } else {
      this.userForm.setErrors({[e.code]: e.message});
    }
  }
}

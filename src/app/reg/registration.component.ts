import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {equalFields, blackList} from './custom.validator';
import { BlackListService } from './black-list.service';
import { Router } from '@angular/router';
import { UserService } from '@app/core/auth/user.service';
import { Address, UserInfo } from '@app/user-info';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [BlackListService]
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  addressFormArray: FormArray;
  submitted = false;

  constructor(
    private blackListService: BlackListService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.addressFormArray = this.fb.array([this.fb.control(
      new Address({country: 'Ukraine', city: 'Kyiv', street: 'Zylyanska', building: 75})
      )]);
    this.registrationForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email], blackList(this.blackListService)],
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl(''),
      'phone': new FormControl('+380', Validators.pattern(/\d{4,}/)),
      'sex': new FormControl(),
      'birthday': new FormControl(),
      'notes': new FormControl(''),
      'notification': new FormControl(true),
      'address': this.addressFormArray
    }, {validators: [equalFields('confirmPassword', 'password')]});
  }

  onSave(value): void {
    if (this.registrationForm.invalid) {
      return;
    }
    this.submitted = true;
    console.log('saving', value);
    this.userService.saveNewUser(new UserInfo(value), value.password)
    .subscribe(() => this.router.navigate(['/']), e => this.onError(e));
  }

  onAddAddress(): void {
    this.addressFormArray.push(new FormControl(new Address({country: 'Ukraine', city: 'Kyiv'})));
  }

  private onError(e: {code: string, message: string}): void {
    this.submitted = false;
    this.registrationForm.setErrors({[e.code]: e.message});
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalFields} from './equal-fields.validator';
import {Address} from '../../user-info';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  addressFormArray: FormArray;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.addressFormArray = new FormArray([new FormControl(new Address({country: 'Ukraine', city: 'Kyiv', street: 'Zylyanska', building: 75}))]);
    this.registrationForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl(''),
      'phone': new FormControl('+380', Validators.pattern(/\d{4,}/)),
      'sex': new FormControl(),
      'birthday': new FormControl(),
      'notes': new FormControl(''),
      'notification': new FormControl(true),
      'address': this.addressFormArray
    }, equalFields('confirmPassword', 'password'));
  }

  onSave(value): void {
    console.log('saving', value);
  }

  onAddAddress(): void {
    this.addressFormArray.push(new FormControl(new Address({country: 'Ukraine', city: 'Kyiv'})));
  }
}

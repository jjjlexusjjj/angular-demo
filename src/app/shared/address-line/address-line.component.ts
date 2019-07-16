import {Component, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import { Address } from '@app/user-info';

@Component({
  selector: 'app-address-line',
  templateUrl: './address-line.component.html',
  styleUrls: ['./address-line.component.css'],
  providers: [ {provide: NG_VALUE_ACCESSOR, useExisting: AddressLineComponent, multi: true} ]
})
export class AddressLineComponent implements OnInit, OnDestroy, ControlValueAccessor {

  addressForm: FormGroup;
  private onChangeFn: (value: Address) => void;
  private subscription: Subscription;

  constructor() {
    this.addressForm = new FormGroup({
      'country': new FormControl(''),
      'state': new FormControl(''),
      'city': new FormControl(''),
      'street': new FormControl(''),
      'building': new FormControl(''),
      'flat': new FormControl(''),
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.onChangeFn = null;
  }

  registerOnChange(fn: (value: Address) => void): void {
    this.onChangeFn = fn;
    this.subscription = this.addressForm.valueChanges
      .subscribe(value => this.onChangeFn(new Address(value)));
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: Address): void {
    this.addressForm.patchValue(value);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {Address} from '../user-info';

@Pipe({
  name: 'addressToString'
})
export class AddressPipe implements PipeTransform {

  transform(value: { [P in keyof Address]?: Address[P] }, args?: any): string {
    if (!value) {
      return '';
    }
    let s = value.country;
    if (value.state) {
      s += ', ' + value.state;
    }
    if (value.city) {
      s += ', ' + value.city;
    }
    if (value.street) {
      s += ', ' + value.street;
    }
    if (value.building) {
      s += ' ' + value.building;
    }
    if (value.flat) {
      s += ' ap. ' + value.flat;
    }
    return s;
  }

}

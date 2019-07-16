import {User} from './auth/user';

export class UserInfo extends User {

  public phone: string;
  public email: string;
  public addresses: Address[];
  public birthday: Date;
  public sex: 'male' | 'female';
  public notes: string;
  public notification: boolean;

  constructor(props?: { [P in keyof UserInfo]?: UserInfo[P] }) {
    super();
    if (props) {
      Object.assign(this, props);
    }
  }

}

export class Address {
  public country: string;
  public state: string;
  public city: string;
  public street: string;
  public building: string | number;
  public flat?: number;

  constructor(props?: { [P in keyof Address]?: Address[P] }) {
    if (props) {
      Object.assign(this, props);
    }
  }

  public toString(): string {
    let s = this.country;
    if (this.state) {
      s += ', ' + this.state;
    }
    if (this.city) {
      s += ', ' + this.city;
    }
    if (this.street) {
      s += ', ' + this.street;
    }
    if (this.building) {
      s += ' ' + this.building;
    }
    if (this.flat) {
      s += ' ap. ' + this.flat;
    }
    return s;
  }
}

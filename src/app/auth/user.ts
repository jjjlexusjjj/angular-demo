export class User {
  id: number | string;
  email: string;
  name: string;

  constructor(o?: {[P in keyof User]?: User[P]}) {
    if (o) {
      Object.assign(this, o);
    }
  }
}

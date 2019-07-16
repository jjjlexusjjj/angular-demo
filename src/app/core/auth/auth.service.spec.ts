import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '../core.module';

describe('AuthService', () => {

  let afAuthStub: Partial<AngularFireAuth>;

  beforeEach(() => {
    afAuthStub = {};

    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [{ provide: AngularFireAuth, useValue: afAuthStub }]
    });
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '../core.module';
import { Observable, from, of } from 'rxjs';
import { User } from './user';

describe('AuthGuard', () => {

  let authServiceStub: Partial<AuthService>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {

    authServiceStub = {
      currentUser: of(new User({id: 1, email: 'email@test.test', name: 'User'}))
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [AuthGuard, {provide: AuthService, useValue: authServiceStub}]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    guard.canActivate(null, null);
    expect(guard).toBeTruthy();
  }));

});

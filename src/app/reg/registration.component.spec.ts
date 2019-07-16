import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { SharedModule } from '@app/shared/shared.module';
import { BlackListService } from './black-list.service';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '@app/core/auth/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let blackServiceStub: Partial<BlackListService>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async(() => {
    blackServiceStub = {
      isBlackListEmail: (email: string) => of(email === 'test@test.com')
    };

    userServiceStub = {};

    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ RegistrationComponent ],
      providers: [
        {provide: BlackListService, useValue: blackServiceStub},
        {provide: AngularFireDatabase, useValue: {}},
        {provide: UserService, useValue: userServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check', () => {
    const els = fixture.debugElement.queryAll(By.css('input'));
  });
});

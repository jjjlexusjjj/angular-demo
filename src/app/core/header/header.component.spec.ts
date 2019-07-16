import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthService } from '../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { User } from '../auth/user';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authStub: Partial<AuthService>;

  beforeEach(async(() => {
    authStub = {currentUser: of(new User({email: 'testuser@test.test'}))};

    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ HeaderComponent ],
      providers: [{provide: AuthService, useValue: authStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logged user name', () => {
    const userSpan: HTMLSpanElement = fixture.debugElement.query(By.css('.user')).nativeElement;
    expect(userSpan).toBeTruthy();
    expect(userSpan.innerText).toContain('testuser@test.test');
  });
});

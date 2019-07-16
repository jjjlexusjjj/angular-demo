import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PopUpComponent } from './pop-up.component';
import { PopUpService } from '../pop-up.service';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;
  const msg = 'my test displayed message';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatButtonModule, NoopAnimationsModule],
      declarations: [ PopUpComponent ],
      providers: [PopUpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    component.message = msg;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoult print message', () => {
    expect(fixture.debugElement.nativeElement.innerText).toContain(msg);
  });

  it('should react on close', (done: DoneFn) => {
    component.onClose.subscribe(data => {
      expect(data).toBe('close');
      done();
    });

    const buttonDE = fixture.debugElement.query(By.css('button[mat-icon-button]'));
    buttonDE.triggerEventHandler('click', null);
  });
});

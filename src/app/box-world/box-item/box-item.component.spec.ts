import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BoxItemComponent } from './box-item.component';
import { Box } from '../box';
import { PopUpService } from '@app/core/pop-up/pop-up.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BoxItemComponent', () => {
  let component: BoxItemComponent;
  let fixture: ComponentFixture<BoxItemComponent>;
  let popUpServiceStub: Partial<PopUpService>;

  beforeEach(async(() => {
    popUpServiceStub = {
      show: (message: string): void => {}
    };
    TestBed.configureTestingModule({
      declarations: [ BoxItemComponent ],
      providers: [{provide: PopUpService, useValue: popUpServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxItemComponent);
    component = fixture.componentInstance;
    component.box = new Box(1234, 10, 50);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message', () => {
    const service = TestBed.get(PopUpService);
    const spy = spyOn(service, 'show').and.returnValue('asfadsgasdg');
    // console.log('result of service show', service.show('sf'));
    // fixture.debugElement.query(By.css('.box-item')).triggerEventHandler('dblclick', null);
    fixture.debugElement.triggerEventHandler('dblclick', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should change color after dblclick', () => {
    const item: DebugElement = fixture.debugElement.query(By.css('.box-item'));
    const initialColor = item.styles['background-color'];
    fixture.debugElement.triggerEventHandler('dblclick', null);
    // fixture.detectChanges();
    expect(item.styles['background-color']).not.toBe(initialColor);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemComponent } from './box-item.component';
import { Box } from '../box';

describe('BoxItemComponent', () => {
  let component: BoxItemComponent;
  let fixture: ComponentFixture<BoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxItemComponent ]
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
});

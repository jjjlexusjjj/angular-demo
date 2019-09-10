import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexedDivComponent } from './flexed-div.component';

describe('FlexedDivComponent', () => {
  let component: FlexedDivComponent;
  let fixture: ComponentFixture<FlexedDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexedDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

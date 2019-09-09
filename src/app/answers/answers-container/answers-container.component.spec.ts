import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersContainerComponent } from './answers-container.component';

describe('AnswersContainerComponent', () => {
  let component: AnswersContainerComponent;
  let fixture: ComponentFixture<AnswersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerArrayComponent } from './answer-array.component';

describe('AnswerArrayComponent', () => {
  let component: AnswerArrayComponent;
  let fixture: ComponentFixture<AnswerArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

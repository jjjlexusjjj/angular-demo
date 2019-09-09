import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSearchBarComponent } from './answer-search-bar.component';

describe('AnswerSearchBarComponent', () => {
  let component: AnswerSearchBarComponent;
  let fixture: ComponentFixture<AnswerSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

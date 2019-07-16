import { TemplateDirective } from './template.directive';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-test',
  template: `
  <ng-template appTemplate="name">content of template</ng-template>
  `
})
class TestDirectiveComponent {
  @ViewChild(TemplateDirective)
  templateDirective: TemplateDirective;
}

describe('TemplateDirective', () => {
  let component: TestDirectiveComponent;
  let fixture: ComponentFixture<TestDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestDirectiveComponent, TemplateDirective]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of test component', () => {
    expect(component).toBeTruthy();
  });

  it('should capture child by directive', () => {
    expect(component.templateDirective).toBeTruthy();
  });

  it('should have name', () => {
    expect(component.templateDirective.name).toBe('name');
  });

  it('should have template', () => {
    expect(component.templateDirective.template).toBeTruthy();
  });
});

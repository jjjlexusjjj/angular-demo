import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {
  @Input('appTemplate')
  name: string;

  constructor(public template: TemplateRef<any>) { }
}

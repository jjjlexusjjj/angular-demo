import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TemplateDirective } from '../template.directive';

type TemplateNames = 'headerTemplate' | 'actionTemplate';
type TemplateInterface = {
  [K in TemplateNames]: TemplateRef<any>
};

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.css']
})
export class MyPanelComponent implements OnInit, AfterContentInit, TemplateInterface {

  private readonly templateMap: { [userTemplateName: string]: TemplateNames } = {
    header: 'headerTemplate',
    action: 'actionTemplate'
  };

  headerTemplate: TemplateRef<any>;
  actionTemplate: TemplateRef<any>;

  @ContentChildren(TemplateDirective)
  private templates: QueryList<TemplateDirective>;

  @Input()
  actions: string[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.templates
      .filter(t => t.name in this.templateMap)
      .forEach(t => this[this.templateMap[t.name]] = t.template);
  }

}



import { Component, OnInit, TemplateRef, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.css']
})
export class DemoContainerComponent implements OnInit {

  actionList: string[] = ['Edit', 'Share', 'Delete'];

  constructor() { }

  ngOnInit() {
  }

}

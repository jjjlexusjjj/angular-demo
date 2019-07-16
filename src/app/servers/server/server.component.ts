import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Server } from '../server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input()
  public server: Server;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  public onRemove: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveClick(): void {
    this.onRemove.emit();
  }
}

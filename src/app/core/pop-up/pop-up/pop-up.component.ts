import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('state', [
      state('open', style({transform: 'translateY(0%)', opacity: 1})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0.5})),
      transition('* => *', animate('200ms ease-in'), )
    ])
  ]
})
export class PopUpComponent implements OnInit {
  private _message: string;
  @Input() title: string;

  @Input()
  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
    this.state = 'open';
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  @HostBinding('@state')
  private state: 'open' | 'closed' = 'closed';

  constructor() { }

  ngOnInit() {
  }

  close(instantEvent: boolean = false): void {
    this.state = 'closed';
    if (!instantEvent) {
      setTimeout(() => {
        this.onClose.emit('close');
      }, 500);
    } else {
      this.onClose.emit('close');
    }
  }

}

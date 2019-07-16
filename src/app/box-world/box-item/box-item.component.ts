import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, HostListener} from '@angular/core';
import {Box} from '../box';
import { PopUpService } from '@app/core/pop-up/pop-up.service';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxItemComponent implements OnInit, AfterViewInit {

  @Input()
  public box: Box;
  @Input()
  public selected: boolean;

  color: string;

  @ViewChild('divItem')
  private set div (value: ElementRef<HTMLDivElement>) {
    if (value) {
      value.nativeElement['BoxItemComponent'] = this;
    }
  }

  constructor(private cdr: ChangeDetectorRef, private popUpService: PopUpService) { }

  private static rndColor(): number {
    return Math.round(Math.random() * 255);
  }

  private static randomColor(): string {
    return `rgba(${BoxItemComponent.rndColor()}, ${BoxItemComponent.rndColor()}, ${BoxItemComponent.rndColor()}, 0.5)`;
  }

  ngOnInit() {
    this.color = BoxItemComponent.randomColor();
  }

  public update(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  @HostListener('dblclick')
  private onDoubleClick(): void {
    console.log('dblClick on box item');
    this.popUpService.show('You hit me!');
    this.color = BoxItemComponent.randomColor();
    this.cdr.detectChanges();
  }
}

import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Box} from '../box';

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

  constructor(private cdr: ChangeDetectorRef) { }

  private static rndColor(): number {
    return Math.round(Math.random() * 255);
  }

  ngOnInit() {
    this.color = `rgba(${BoxItemComponent.rndColor()}, ${BoxItemComponent.rndColor()}, ${BoxItemComponent.rndColor()}, 0.5)`;
  }

  public update(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}

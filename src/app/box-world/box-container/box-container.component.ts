import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Box} from '../box';
import {BoxItemComponent} from '../box-item/box-item.component';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxContainerComponent implements OnInit, AfterViewInit {

  boxes: Box[];
  private offsetX: number;
  private offsetY: number;
  private _currentBox: BoxItemComponent;
  private size = 10000;

  private get currentBox(): BoxItemComponent {
    return this._currentBox;
  }

  private set currentBox(value: BoxItemComponent) {
    if (this._currentBox === value) {
      return;
    }
    if (this._currentBox) {
      this._currentBox.selected = false;
      this._currentBox.update();
    }
    this._currentBox = value;
    if (this._currentBox) {
      this._currentBox.selected = true;
      this._currentBox.update();
    }
  }
  constructor(private cd: ChangeDetectorRef,
              private componentElement: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.cd.detach();
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  @HostListener('window:resize')
  private onHostResize(): void {
    // this.draw();
  }

  private draw(): void {
    const el = this.componentElement.nativeElement;
    const w = el.offsetWidth - 24;
    const h = el.offsetHeight - 24;
    const a = [];
    for (let i = 0; i < this.size; i++) {
      a.push(new Box(i, Math.random() * w, Math.random() * h));
    }
    this.boxes = a;
    this.cd.detectChanges();
  }

  onMouseMove(event: MouseEvent): void {
    event.preventDefault();
    if (!isNullOrUndefined(this.currentBox)) {
      this.updateBox(event.clientX - this.offsetX, event.clientY - this.offsetY);
    }

  }

  onMouseDown(event: MouseEvent): void {
    this.currentBox = <BoxItemComponent>event.target['BoxItemComponent'];
    if (isNullOrUndefined(this.currentBox)) {
      return;
    }
    const box = this.currentBox.box;
    this.offsetX = event.clientX - box.x;
    this.offsetY = event.clientY - box.y;
  }

  onMouseUp(event: MouseEvent): void {
    this.currentBox = null;
  }

  private updateBox(x: number, y: number): void {
    const box = this.currentBox.box;
    box.x = x;
    box.y = y;
    this.currentBox.update();
  }
}
